'use strict'

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Good to go!');
    }, 1000);
    setTimeout(() => {
        reject('uh oh');
    }, 1001);
});

myPromise.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

myPromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});