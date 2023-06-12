// function myFunction(message) {
//     return message
// }


// let myMessage = myFunction('Hello World!');
// console.log(myMessage)
// setTimeout(function () {
//     console.log(myMessage)
// }, 2000);





// let getWords = function () {
//     console.log("Pizza");

//     setTimeout( function () {
//         console.log("Meatballs")
//     }, 3000);

//     setTimeout( function () {
//         console.log("Pepperoni")
//     }, 2000);

//     setTimeout( function () {
//         console.log("Pasta")
//     }, 1000);
// }

// getWords();




// let done = function () {
//     console.log("Job's done!")
// };

// let countdown = function(num, callback) {
//     if(num===1) {
//         callback();
//     } else {
//         setTimeout( () => {
//             console.log(num);
//             countdown( num - 1, callback)
//         },1000)
//     }
// }

// countdown(10, done);


// let lunchTime = true;

// const orderMeSomeFood = function() {
//     return new Promise(function (resovle, reject) {
//         if(lunchTime) {
//             let myLunch = {
//                 lunch: "Nachos",
//                 drink: "Cola"
//             }
//             resovle(myLunch)
//         } else {
//             let errMessage = new Error("Not time for lunch");
//             reject(errMessage);
//         }
//     })
// }

// orderMeSomeFood()
// .then(response => console.log(response))
// .catch(error => console.log(error))
