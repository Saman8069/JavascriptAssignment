/* Create an object car with properties brand, model, and a method getDetails that returns "This car is a [brand] [model]". Use this inside the method.*/

class Car
{
    constructor (brand, model)
     { this.brand = brand;
       this.model = model;
       }
    getDetails()
    { 
        console.log('This car is a $(this.brand) $(this.model)');
    }   
}

let brand = "Tesla";
let model = "CyberTruck";
const obj = new Car(brand, model);
obj.getDetails();