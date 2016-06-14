let sum = function() { //arguments don't work with arrow functions
    return Array.prototype.reduce.call(arguments,(prev,curr) => {
        return prev + curr;
    });
};

console.log(sum(2,3,4,5));


let sum2 = (...args) => {
    return args.reduce((prev,curr) => prev + curr);
}

console.log(sum2(2,3,4,5));


let multiply = (mul, ...numbers) => {
    return numbers.map((n) => {
        return mul * n;
    });
};

console.log(multiply(2,3,4,5));

let numbers = [2,3,4,5];

let max = Math.max(...numbers);

console.log(max);
