//Create a class name Person with firstname and lastName property and return a fullname as string

class Person{
constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
getFullName(){
     const string=this.firstName + " " + this.lastName
     console.log(string);
}
}

let p = new Person("John","doe");
p.getFullName()

//Create a class called teacher and extend person

class Teacher extends Person{
    constructor(firstName,lastName,subject){
        super(firstName,lastName);
        this.subject = subject;
    }

    getFullName(){
        
        const string=this.firstName + " " + this.lastName + " " + this.subject
        console.log(string);
   }
}
let result = new Teacher("john", "doe", "Computer Science")
result.getFullName();

//Create a Class called Animal

class Animal{
    constructor(name){
        
        this.name = name;
    }
    makeSound(){
        console.log(this.name + " "+ "Barks")
    }

}
let sound = new Animal("Dog")
sound.makeSound();

//cat class and extend animal class
class Cat extends Animal{
    // constructor(name){
    //     super(name);
    // }
    makeSound(){
        console.log(this.name + " "+ "Meow")
    }

}
let myCat = new Cat("Fluffy")
myCat.makeSound();