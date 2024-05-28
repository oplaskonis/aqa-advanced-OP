const log = console.log;

import { Book } from './Book.mjs';
import { EBook } from './EBook.mjs';

let book1 = new Book ("Harry Potter and the Philosopher's Stone", "Joanne Rowling", 1997);
let book2 = new Book ("Harry Potter and the Chamber of Secrets", "Joanne Rowling", 1998);
let book3 = new Book ("Harry Potter and the Prisoner of Azkaban", "Joanne Rowling", 1999);

book1.printInfo ();
book2.printInfo ();
book3.printInfo ();

let ebook1 = new EBook ("Harry Potter and the Goblet of Fire", "Joanne Rowling", 2000, "pdf");

ebook1.printInfo ();

let books = [
    { title: "Harry Potter and the Philosopher's Stone", author: "Joanne Rowling", year: 1997 },
    { title: "Harry Potter and the Chamber of Secrets", author: "Joanne Rowling", year: 1998 },
    { title: "Harry Potter and the Prisoner of Azkaban", author: "Joanne Rowling", year: 1999 },
    { title: "Harry Potter and the Goblet of Fire", author: "Joanne Rowling", year: 2000, }
];

let oldestBook = Book.oldestBook;
log("Oldest book:", oldestBook(books));

let newBook = new Book("Harry Potter and the Order of the Phoenix", 'Joanne Rowling', 2003);
let newEbook = EBook.createEbook(newBook, 'PDF');
log(newEbook);


