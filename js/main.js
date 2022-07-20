// // let user = {
// // name : 'Lyzy',
// // surname : 'Rykova'
// // };
// // // user.name = 'Lizi';
// // // delete user.name;
// // //  console.log(user);

// // function isEmpty(obj) {
// //   for (let key in obj) {
// //     return false ;
// //   }
// //   return true;
// // } 
// // console.log(isEmpty(user));

// let salaries = {
//     // John: 100,
//     // Ann: 160,
//     // Pete: 130
//   }

// let sum = salaries.John + salaries.Ann + salaries.Pete;
// alert (sum);

// function isEmpty(obj) {
//   for (let key in obj) {
//     return true ;
//   }
//   return 0;
// } 
// console.log(isEmpty(salaries));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

// let sum = 0;

// function lol() {
//     for (let key in menu) {
//         sum *= menu[key];
//     }
// }

// console.log(sum);

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}

console.log(multiplyNumeric(menu));