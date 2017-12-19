//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function simpleSubtractorLoop(num) {
    while(num > 0) {
        console.log(`Current value ${num}`);
        num--;
    }
}

//simpleSubtractorLoop(25)



//2. Next, try looping just like above except using recursion

function simpleSubtractor(num) {
    console.log(`Current value ${num}`);
    if (num === 0) return;
    simpleSubtractor(num-1);
}

//simpleSubtractor(25);



//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function exponentLoop(base, expo) {
    let value;
    if (expo === 0) {
        value = 1;
    }
    
    if (expo < 0) {
        value = 1;
        while(expo < 0) {
            value = value/base;
            expo++;
        }
    }
    
    if (expo > 0) {
        value = base;
        while(expo > 1) {
            value = value*base;
            expo--;
        }
    }
    
    return value;
} 

//console.log(exponentLoop(5, -3))

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse


// #######################

// Fibonacci secuence: every number after the first two is the sum of the two preceding ones
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fibonacci(n) {
    if(n <= 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2)
}

//console.log(fibonacci(9999));


// Factorial

// 5! => 5*4*3*2*1 = 120;

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return factorial(n-1)*n;
}

console.log('>>>', factorial(5))