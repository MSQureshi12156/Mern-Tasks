//Merge two objects into a single objects

// let obj1 = {fName: "Sulman", lName: "Qureshi"}
// let obj2 = {phoneNo: 12345, address: "kashmir"}
// let obj3 = {...obj1, ...obj2}
// console.log(obj3)

//get title and author

// let book = {title: "Programming Fundamental",author: "Salman", year: 2023}

// const result = (x) => {
//     let {title, author}= x;
//     console.log(title,author)
//   }

// result(book))

//find area
// let area = {width: 50,height: 100}

// const result = (x) => {
//     let {width,height}= x;
//     console.log(width*height)
//   }

// console.log(result(area))

//take two array and merge them
// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9];
// const merge = (x,y) => {
//     const arr3 =[...arr1, ...arr2];
//     console.log(arr3)
//   }


// merge(arr1,arr2)

//takes array of string and return each array with uppercase


function upperCaseStrings(x) {
    const newArr = [...x]
    return newArr.map(arr => {
        return arr.toUpperCase();
    })

}

const arr1 = ["abc", "def", "ghi"];
console.log(upperCaseStrings(arr1))

// //
// let obj1 = {title: "Programming Fundamental",author: "Salman", year: 2023}
// let obj2 = {title2: "Fundamental",author2: "Qureshi", year: 2020}

// const result = (x,y) => {
    
//     const obj3 = {...x,...y};
//     console.log(obj3)
//   }

  

// result(obj1, obj2)
 
// //take object of longitude and latitude and return location
// const location = {
//     latitude: 40.7128,
//     longitude: -74.0060
//   }
//   function getLocationArray({latitude, longitude}) {
//   return [latitude, longitude];
// }
  
//   const locationArray = getLocationArray(location);
  
//   console.log(locationArray);


//take an array and return the sum of number using the spread operator

// function sumNumbers(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     return sum;
//   }
function sum(...nums) {
    let total = 0;
  
    nums.forEach(numbers => {
      total += numbers;
    });
  
    return total;
  }

  const num=[1,2,3,4,5]
  console.log(sum(...num));

//takes an object with firstName and lastName properties, and logs a greeting
  
// function greets ({firstName,lastName}){
    function greets (x){
    let {firstName,lastName} = x;
    console.log("Good Night: "+ firstName, lastName)

}

let person = {firstName: "Sulman",lastName: "Qureshi"}  
greets(person)

//that takes any number of argument and return their sum using the rest operator
function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
// const num = [1,2,3,4]
console.log(sum(...num))

