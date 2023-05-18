// //creat function to add two number using try catch block

// function addNumber(x,y) {
//     try {
//         if (typeof x !="number" || typeof y !="number") {
//             throw ("One of your value is not a number")
//         }
//         console.log(x+y);
        
//     } catch (error) {
//         console.log(error)
        
//     }
// }
// addNumber(5,10)


// //function that takes an array of object use foreach()

// const items = [
//     { itemName: "Item1", price: 5 },
//     { itemName: "Item2", price: 15 },
//     { itemName: "Item3", price: 20 }
//   ]

// function totalPrice(itemList) {
//     let total = 0;
//     itemList.forEach(function(item) {
//       total =total + item.price;
      
//     });
//     return total;
//   }
//     const total = totalPrice(items);
//     console.log(total);


// //Takes an array of strings and returns the total number of characters in all the strings

// let string = ["hello","datics ai","peak solution"];
// function totalCharacter(getString) {
//     let sumOfChars = 0;
//     getString.forEach(function(arr) {
//       sumOfChars += arr.length;
//     });
//     return sumOfChars;
//   }
 
// const totalChars = totalCharacter(string);
// console.log("Total number of character in a string are:" + " " + totalChars);


// //function that takes an array of strings and logs each string to the console using the foreach()
// function logStrings(array) {
//     array.forEach(function(result) {
//       console.log(result);
//     });
//   }
//   logStrings(string)

// //Returns the first object with an age property between 18 and 30 using the find() 

// let names =  [{ name: "Sulman", age: 17 },
//                 { name: "Junaid", age: 16 },
//                 { name: "Shakeel", age: 18 },
//                 { name: "Khalid", age: 25 }]
// let result= names.find(age);
// console.log(result)

// function age(person) {
//     if(person.age > 18 && person.age < 30){
//     return person;
//     }
    
// }

//Takes a array of numbers and return a product of all numbers

const numbers = [2, 3, 4, 5];

function product(numbers) {
    let x = 1;
    try {
      numbers.forEach(function(number) {
        if (typeof number != 'number') {
          throw('One of your value is not a number');
        }
        x *= number;
      });
      return x;
    } catch(error) {
      console.error(error);
    }
  }

let finalResult = product(numbers);
console.log(finalResult);

//take a array and return a new array with double number using foreach

// function numbersDouble(numbers) {
//     let newArray = [];
//     numbers.forEach(function(number) {
//         newArray.push(number * 2);
//     });
//     return newArray;
//   }
//   const double = numbersDouble(numbers)
//   console.log(double)
  

 
// const doubledArray = numbers.map(function(doubleElement) {
//   return doubleElement * 2;
// });
// console.log(doubledArray);
