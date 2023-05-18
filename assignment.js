//takes in an array of strings and returns a new array with the strings sorted by length

function sortByLength(arr) {
    return arr.sort((a, b) => b.length - a.length);
  }
  const strings=["Peaks","Solution","College","Lahore"]
  const sortArr=sortByLength(strings)
  console.log(sortArr)

//takes in an array of objects representing people and returns a new array with only the people who are over the age of 30
function filterOver30(persons) {
    let result=persons.filter(x=>{
        return x.age>30;
    })
    return result;
    
}

const people=[{name:"Sulman", age:25},
    {name:"Junaid", age:23},
    {name:"Khalid", age:24},
    {name:"Shakil", age:31}
]
const newArr=filterOver30(people)
console.log(newArr)



//Use the spread Operator to Combine multiple arrays into one and array sorted in descending order
const array1=[1,2,4,5]
const array2=[3,9,10]
const array3=[11,6,7,8]

const arrays=(arr1,arr2,arr3)=>{
    return [...arr1,...arr2,...arr3].sort((a,b)=>b-a);
}

const result=arrays(array1,array2,array3)

console.log(result)

//takes in an array of strings and returns a new array with only the strings that contain more vowels than consonants
function filterVowels(strings) {
    const vowels = "aeiouAEIOU";
    return strings.filter((str) => {
      let vowelCount = 0, consonantCount = 0;
      for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
          vowelCount++;
        } else {
          consonantCount++;
        }
      }
      return vowelCount > consonantCount;
    });
  }
const strings1 = ["Audio", "lynch", "MIAOU", "language", "Myths"];
const filterString = filterVowels(strings1);
console.log(filterString);

//function that takes in a number and prints out all the prime numbers up to that number
function primeNumber(n) {
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log("Prime no is is : ",i);
      }
    }
  }
  primeNumber(40)

//function that takes an array of objects with name and age properties, and returns a new array with the ages sorted in descending order using the rest operator
function ageSort(...people) {
    const ages = people.map(({ age }) => age);
    return ages.sort((a, b) => b - a);
  }
const sortedAges = ageSort(...people);
console.log("Age Sorted BY Descending : ",sortedAges);

//function that takes an object with city, state, and country properties representing a location,and logs the location in the format city, state, country using destructuring

function location({ city, state, country }) {
    console.log("Location is: ", city, state, country);
  }
const obj = { city: "Lahore", state: "Punjab", country: "Pakistan" };
location(obj);

//takes a string and converts it to a number Use a try/catch block to handle any errors that may occur, such as if the string is not a valid number 
function stringToNumber(string) {
    try {
        const num=Number(string)
        if (typeof num != "number") {
            throw "Not a valid Number" ;   
        }
        return num;
    } 
    catch (error) {
            console.log(error)
    }
}
console.log(stringToNumber("45"))


//takes an array of objects with title and year properties and returns first object equal to 2000 using the find() method

const books=[
    {title: "The First Book",year:1999},
    {title:"The Second Book",year:2021},
    {title:"The Third Book",year:2021},
    {title: "The Last Book", year:2023}
];
const firstObject=books.find((a)=> a.year>=2000)
console.log(firstObject)


//class called Person with properties name, age, and gender, and a method called greet that logs a greeting to the console

class person{
    constructor(obj1){
       const {name,age,gender} = obj1
        this.name=name;
        this.age=age;
        this.gender=gender;
        
    }
    greet(){
        console.log("Hi! " +this.name)
    }
    
}
const friend=new person({name:"Junaid",age:23,gender:"Male"})
friend.greet()
