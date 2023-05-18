array=["new1", 'new2', 'new3','new4'];
console.log(array.toString());


//append at 2nd index

array.splice(2, 0, "new5");
console.log(array.toString());

//remove from 0 index
array.shift();
console.log(array);

//remove at 3rd index
array.splice(3,1);
console.log(array);

//append at last index
array.push("last");
console.log(array);

//example of slice method
console.log(array.slice(2));

//concat multiple strings
array1 = ["Peaks", "Solution"];
array2 = ["College", "Lower", "Mall"];
array3 = ["Secreteriate", "Lahore"];
newArr = array1.concat(array2, array3);
console.log(newArr);


//take array of numbers and find even number using find

const numbers= [1,2,3,4,5,6,7,8];
const evenNumber = numbers.find(even) 
console.log(evenNumber)
function even(number){
    return number % 2 == 0;
}

//get array and find hello word using find()


const string= ["say", "Hello", "good By"];
const hello = string.find(string2) 
console.log(hello)
function string2(newstring){
    if(newstring == "Hello")
    return newstring;
}

//Take an array of object with title and year
const array_object = [{ title: "Sulman", year: 1997 },
{ title: "Junaid", year: 2002 },
{ title: "Shakeel", year: 2005 },
{ title: "Khalid", year: 2000 }];
const new_object = array_object.find(property)
console.log(new_object);

function property(new_year) {
    if (new_year.year >=2000)
  
    return new_year;
  }

  //create array of string using Map()

  const string= ["say", "hello", "good By"];
  const upperString = string.map(string2)
  console.log(upperString);
  function string2(array){
    return array.toUpperCase();
  }

// Take Array of objects of cars, makes and model

const cars= [{ makes: "Honda", model: 2010 },
             { makes: "Corolla", model: 1997 },
             { makes: "BMW", model: 2017 }]

const new_arr = cars.map(array);
console.log(new_arr)

function array(array2){
    return array2.makes;

}

//take a array of string and find String start with letter A using filter Method


const string= ["say", "hello", "Abcd"];
  const startString = string.filter(string2)
  console.log(startString);
  function string2(array){
    return array.startsWith('A');
  }


//Makes an array of string using lastIndexOf()

const array = ["abcd", "abcd", "webcf", "abfrtcd", "abcd", "djshfj"];
let string = "abcd";
const new_arr = array.lastIndexOf(string);
console.log(new_arr);

