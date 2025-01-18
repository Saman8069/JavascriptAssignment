// Create a Book class with properties title, author, and year. Add a method to display information about the book using template literals.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  display() {
    console.log(
      `The name of Book is ${this.title} the Author is ${this.author} and the published year is ${this.year}`
    );
  }
}

let LOTM= new Book("LOTM","Cuttlefish",2019);
LOTM.display();

