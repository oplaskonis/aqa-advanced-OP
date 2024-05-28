const log = console.log;

export class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }
    static oldestBook(books) {
        let oldestBook = books[0];
        for (const book of books) {
            if
                (book.year < oldestBook.year) {
                oldestBook = book
            }
        }
        return oldestBook;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        if (typeof title !== 'string') throw new Error ("Wrong title");
            this._title = title         
    }
    get author() {
        return this._author;
    }
    set author(author) {
        if (typeof author !== 'string') throw new Error ("Wrong author");
            this._author = author                 
    }
    get year() {
        return this._year
    }
    set year(year) {
        if (typeof year !== 'number')  throw new Error ("Wrong year");
            this._year = year  
    }
    printInfo() {
        log(this._title, this._author, this._year);
    }
};
