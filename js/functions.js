// Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

function greet(name){
    console.log("Hello, " + name);
}

greet("Team")

// Question-2:  Write a function that takes two parameters, adds them together, and returns the result.

function add(one,two){
    let sum = one + two;
    console.log("The addition is: " + sum)
}

add(50,25)

// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

function hour(){
    if(time >= 5 && time < 12){
        console.log("Good Morning!");
    }else if(time >= 12 && time < 18){
        console.log("Good Afternoon");
    }else{
        console.log("Good Evening")
    }
    
}
let time = new Date().getHours()
hour(time)

// Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

function rectangle(length,width){
    area = length * width;
    console.log(area);
}

rectangle(10,20)

// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

function power(base,expo){
   let res = Math.pow(base,expo);
   console.log(res);
}

power(6,4)

// Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

function prime(num){
  for(let i = 2;i<=Math.sqrt(num);i++){
    if(num % i == 0){
        return false;
    }
  }
  return true;
}

if(prime(3)){
    console.log("prime number")
}else{
    console.log("not a prime number")
}


// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

let outside = 100;
function globe(){
    let a = "outside one";
    scope();
    function scope(){
       let b = "inside one";
       console.log(b) // it will print 
       console.log(a) // it will print  because a is outside of the scope 
        console.log(outside)
    }
     console.log(outside)
    console.log(b) // it will throw an error because b is outside of a scope function
}

globe()

// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.

// --------closures-------> 
function greet(name){
    function invite(){
        console.log(`${name}  You are invited to attend the special program buddy!` );
    }

    function gifts(name){
       console.log(`${name}  don't forget your gifts buddy`)
    }

    invite();
    gifts();
}

greet("karthick");


// Question-9:  Write a recursive function to calculate the factorial of a given number.
function fact(n){
    if(n == 1 || n==0){
        return 1;
    }else{
       return n*(fact(n-1));
    }
}

fact(5)

// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x))

function f(x){
    f(x) = x + 2;
}

function g(x){
    g(x) = 2*x;
}

console.log(h(x)=f(g(x)))

// *** If you know Array and async JS , attempt these Problems *** 

// Question-1:  Write a function that takes an array and a callback function. Apply the callback function to each element of the array and return a new array with the modified elements.

function app(n,cb){
    let sum = 0;
   for(let i = 1; i<=n.length;i++){
    sum += i
   }
    cb(sum)
}
app([1,2,3,4,5,6,7,8,9,10],function result(res){
    console.log("the sum, is " + res)
})


// Question-2:  Write a function that takes an array of numbers and returns a new array containing only the odd numbers.

function odd(n){
    let res = []
    for(let i = 0; i<n.length; i++){
      if(n[i]%2 !==0){
        res.push(n[i]);
      }
    }
    return res
  }

console.log(  odd([1,2,3,4,5,6,7,8,9,10]))

// Question-3:  Write a function that takes an array of numbers and returns a new array where each element is doubled.

function double(n){
    let res = [];
    for(let i = 1;i<n.length;i++){
      res.push(n[i]*2)
    }
    return res
  }
  
  console.log(double([1,2,3,4,5]))

// Question-4:  Write a function that takes an array of strings and returns a new array where each string is transformed to uppercase.

function upper(str){
    let res = []
    for(let i = 0; i< str.length;i++){
       res.push(str[i].toUpperCase());
    }
    return res
  }
  
   console.log(upper(['abc','def']))

// Question-5:  Write a function that uses setTimeout to simulate an asynchronous operation. The function should print a message to the console after a specified delay.

function delay(){
    console.log("it starts I think!")
    setTimeout((data)=>{
       console.log("it goes")
    },4000)
}

delay()

// Question-6:  WAP to perform read and write operation in a text file in JS.

const fs = require('fs');

fs.readFile('one.txt','utf-8',(err,data)=>{
  console.log( data );
})