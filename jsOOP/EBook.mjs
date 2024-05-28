const log = console.log;

import { Book } from './Book.mjs';

export class EBook extends Book {
    constructor(title, author, year, format) {
        super (title, author, year);
        this._format = format;
    }
    static createEbook(book, format) {
        let eBook = new EBook(book._title, book._author, book._year, format);
        return eBook;
    }
    get format() {
        return this._format;
    }
    set format(format) {
        if (typeof format === 'string') {
            this._format = format;
        } else {
            throw new Error ("Wrong format");
        }
    }
    printInfo() {
        super.printInfo();
        log (this._format);
    }
};

