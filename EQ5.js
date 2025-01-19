// Define an object to represent a book with properties like title, author, year, and genre. Write a function that takes this object as input and returns a string summary like:"Title: [title], Author: [author], Published in: [year]. Add a new property rating to the book object and update its value.

let Book = {
  title: "Reverand Insanity",
  author: "GRZ",
  year: 2012,
  genre: ["Wuxia, Xianxia"],
};

const review = (obj) => {
  console.log(`Title: ${obj.title}, Author:${obj.author}, Published in:${obj.year}`);
};

Book.rating = 4.8;

console.log(Book);
review(Book);
