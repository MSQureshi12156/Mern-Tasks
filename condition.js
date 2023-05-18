//Even or add

a= 3
if(a%2==0){
    console.log("The number is even")
}else{
    console.log("The number is odd")
}

// print 1 to 10 using for loop

for(i=1; i<=10; i++){
    console.log(i);
}

// print even number 

for(i=1;i<=20;i++){
    if(i%2==0){
    console.log(i)
    }
}


//sum of numbers from 1 to 10
i=1;
sum=0;
while(i <= 10){
    sum+=i;
    console.log(sum);
    i+=1;
}

//multiplication of a given number
n = 5;

for(i=1; i<=10; i++){
    console.log(n +" * "+ i + " = " + n*i );
}

//Given number is prime or not


// for(i=2; i<=n-1;){
//     if(n % i ==0){
//         console.log("Given number is not prime");
//         i++;
//     }
//     else{
//         console.log("Given number is prime");
//         i++;
//     }

// }
 n = 9;
isPrime = true;

if (n <= 1) {
  console.log("Given number is not prime");
} else {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
    
    }
  }

  if (isPrime) {
    console.log("Given number is Prime");
  } else {
    console.log("Given number is not Prime");
  }
}


    

  
