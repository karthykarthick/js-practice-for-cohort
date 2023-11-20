// Question-1: WAP that logs numbers from 1 to 10 to the console.

function log(){
    for(let i = 1;i<=10;i++){
        console.log(i+" ");
    }
}

// Question-2: WAP that log all even numbers from 2 to 20.

function even(){
    for(let i = 2;i<=20;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}

// Question-3: WAP that counts backward from 10 to 1 and logs the values.

function backwards(){
    for(let i=10;i>=1;i--){
        console.log(i);
    }
}

// Question-4: WAP to calculate the sum of numbers from 1 to 5.

function sum(){
    let sum = 0;
    for(let i = 1;i<=5;i++){
        sum = sum + i;
    }
    console.log(sum);
}
// Question-5: WAP that prints powers of 2 (2^n) up to 64.

function power(n){
    let exponent = 2;
    let power = n;
    let val = 0;
    val = Math.pow(exponent,power);
    console.log(val);
}
// Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.

//
function guess(n){
    let val = n;
    let i = 1;
    do{
        let random = Math.floor(Math.random() * 10);
       if(random == val){
          console.log("you guessed it correctly")
       }else{
        console.log("you missed it!");
       }
       i++;
    }while(i <= 10);
}


// Question-7: WAP to display the multiplication table (1 to 10) in the console.

function multiplication(n){
    let sum = 0;
    for(let i = 1;i<=10;i++){
       sum = i * n;
       console.log(sum);
    }
}

// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).
function counter(){
    let counter = 0;
    for(let i=0;i<=10;i++){
          counter++;
          
            if(counter == 3){
                console.log(counter);
                continue;
           }
           if(counter == 5){
            break;
           }
    }
}

// Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."

function fizzBuzz(n){
    if(n%3 == 0 && n%5 == 0){
        console.log("Fizz Buzz");
    }else if(n % 3 == 0){
        console.log("Fizz");
    }else if(n % 5 == 0){
        console.log("Buzz");
    }else{
        console.log("Enter Multiple of 3 and 5");
    }
}

// prime - number within range
function isprime(n){
    if(n<2){
        console.log("not a prime number");
    }
    for(let i = 2; i<=Math.sqrt(n);i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

// Question-10: WAP to identify and log prime numbers within a given range.
function prime(one,two){
  let start = one;
  let end = two;
  for(let i = start; i<=end; i++){
    
    if(isprime(i)){
        console.log(i);
    }
  }
}

//---------------------------------------------------patterns-------------------------------------------------
// Question-1: 
// WAP to print this
// *
// **
// ***
// ****
// *****    

function pattern1(n){
    let str = ''
    for(let i = 1;i<=n;i++){
        for(let j = 1; j<=i;j++){
            str += '*'
        }
        str += "\n";
    }
  console.log(str)
}

// Question-2: 
// WAP to print this 
//    *
//   ***
//  *****
// *******

function pattern2(n){
    let str = '';
    for(let i = 0; i<n;i++){
        //spaces
        for(let j = 0; j<n-i-1;j++){
            str += ' ';
        }
        //star
        for(let j=0;j<2*i+1; j++){
            str += '*';
        }
       str += '\n'
    }
    console.log(str);
}


// Question-3:
// WAP to print this
// *****
// *   *
// *   *
// *****
function pattern3(n){
    let str = '';
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
          if( i==n-1 || i==0 || j==0 || j==n-1 ){
            str += '*'; 
          }else{
           str += ' '
          } 
        }
      str+="\n"
    }
    console.log(str)
}
// Question-4:
// WAP to print this
// 1
// 12
// 123
// 1234
// 12345


function pattern4(n){
    let num = "";
    for(let i=1;i<=n;i++){
        for(let j = 1;j<=i;j++){
           num += j;
        }
        num += "\n"
    }
  console.log(num)
}

// Question-5
// WAP to print this
//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE

function pattern5(n){
    let str = '';
    for(let i=0;i<n;i++){
        //spaces
        for(let j=0;j<n-i-1;j++){
            str+=' ';
        }
        //alphabets
        for(let j=0; j<2*i+1;j++){
            str+=String.fromCharCode(65 + i);
        }
        str+='\n'
    }
    console.log(str)
}