// Multiply table

function table(x,y){
    
    for(i=1; i<=y; i++){
        console.log(x +" * "+ i + " = " + x*i );
    }
}
table(5,15);


//checkEvenOdd
function checkEvenOdd(number) {
    if (number%2==0){
        
        return "Even";
    }
    else{
    
        return "Odd";
    }
    
}
result=checkEvenOdd(9);
console.log(result)


//convertToUpperCase
function convertToUpperCase(string) {
    console.log(string.toUpperCase());
    
}
convertToUpperCase("my name is sulman");

//calculateArea
function calculateArea(width,height) {
    area = width * height;
    console.log("Area of Triangle is" +" " + area);
}

calculateArea(10,20);

//calculateAverage

function calculateAverage(numbers) {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum / numbers.length;
  }
  
  console.log(calculateAverage([1,2,3]));