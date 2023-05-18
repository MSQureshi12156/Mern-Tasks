//take array and return a new array with the length greater then 5

new_arr= []
let arr_string = (array) =>{
for (i =0; i< array.length; i++) {
    if(array[i].length > 5){
        new_arr.push(array[i]);
        
    }
    
}
// return (new_arr.toString());
return new_arr;
}
result=arr_string(["salman qureshi", "junaid", "Rao"])
console.log(result)



let array = (numbers) =>{
    maxNumber=0;
    for (i =0; i< numbers.length; i++) {
        if(numbers[i] > maxNumber){
            maxNumber = numbers[i];
        }
        
    }
    return maxNumber;
}
console.log(array([1,45,65,78,556]));


