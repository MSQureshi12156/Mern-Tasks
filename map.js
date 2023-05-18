// Array of book objects
let booksObject = [
    { title: 'BeingsGuru', author: 'Hisham Sarwar' },
    { title: 'The Pragmatic Programmer', author: 'David Thomas' },
    { title: 'Clean Code', author: 'Robert C' },
  ];
  
  // Use map() to create a new array with only book titles
  let bookTitle = booksObject.map(book => book.title);
  
  console.log(bookTitle);
  
//creating a new array with only the ages using map()

let people = [
    { name: "Sulman", age: 25 },
    { name: "Junaid", age: 24 },
    { name: "Shakeel", age: 26 },
    { name: "Khalid", age: 25 }
  ];
  
  const ages = people.map(person => person.age);
  
  console.log(ages);
  



  //find Oldest person in the array
  function oldestPerson(people) {
    let oldest = people[0];
  
    for (let i = 1; i < people.length; i++) {
      if (people[i].age > oldest.age) {
        oldest = people[i];
      }
    }
  
    return oldest;
  }
  console.log(oldestPerson([{ name: "Sulman", age: 25 },
  { name: "Junaid", age: 24 },
  { name: "Shakeel", age: 26 },
  { name: "Khalid", age: 25 }]))



  