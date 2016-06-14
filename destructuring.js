let person = {
    name: "Ryan",
    age: 30,
    height: "6' 2''",
    location: "Toronto"
};

person.age; //30
person['age']; //30

let {age: personAge} = person;
console.log(personAge);

let { age, name } = person;
console.log(`${age} ${name}`);
console.log(typeof age);

let key = "height";
let { [key] : keyHeight} = person;
console.log(keyHeight);

let numbers = [1,2,3,4,5,6,7,8];
let [first, second, , fourth, ...theRest] = numbers;
console.log(first, second, fourth, theRest);
