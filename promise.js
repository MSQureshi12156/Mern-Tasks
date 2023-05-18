function checkNumber(n){
    var num = new Promise(function(resolve, reject) {
        
        if(n>=0){
            resolve("This Number is positive");
        }
        else{
            reject("Entered number is not positive")
        }
    
    });


num.then(function (result){
    console.log(result)
})
.catch(function (reject){
    console.log(reject)
})
}
checkNumber(-8);


function checkEven(n){
    var num = new Promise(function(resolve, reject) {
        
        if(n%2==0){
            resolve("Number is Even");
        }
        else{
            reject("Number is odd")
        }
    
    });


num.then(function (result){
    console.log(result)
})
.catch(function (reject){
    console.log(reject)
})
}
checkEven(8);

function sum(result){
    return result;
}

const addSum = (x,y,sum) =>{ 
    return sum(x+y)
}
console.log("Total SUm is: " + addSum(5,6,sum));