/*Create a Person class with properties name and age, and a method introduce that logs a message like "Hi, my name is [name] and I am [age] years old."*/

class Person{ 
    constructor(name, age){
        this.name=name;
        this.age=age;
      }
    introduce(){
            console.log('Hi, my name is ' + (this.name) + ' and I am ' + (this.age) + ' years old. ');
        }
    }

let name = "Saman";
let age = 20;
const obj = new Person(name,age);
obj.introduce();
