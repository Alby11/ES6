'use strict'

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Good to go!');
    }, 500);
    setTimeout(() => {
        reject('uh oh');
    }, 1000);
});

myPromise
    .then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    });

myPromise
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Good to go! 1');
    }, 500);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Good to go! 2');
    }, 1000);
});

let myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('uh oh! 3');
    }, 5000);
});

Promise.all([myPromise1, myPromise2, myPromise3])
    .then((data) => {
        console.log(data);
    },(err) => {
        console.log(err);
    });

fetch('http://apiicndb.com/jokes/random/10')
    .then((response) => {
        response.json()
            .then((json) => {
                console.log(json);
            });
    })
    .catch((error) => {
        console.log(error);
    });

