// Explain what is going on here.


// we created a new promise and set it to 'p',
// we set it's initial resolve value to 1 and
// it's timeout to one second. Our promise stream adds 1
// to the value each time .then(add1) is run. Because our timeout
// was set to 1 second our stream wont be run until that time is
// reached 



var p = new Promise(function(res, rej){
    setTimeout(() => res(1), 1000)
})

p.then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then((v) => console.log(v)) //--> new Promise

function add1(v){ return v+1 }
