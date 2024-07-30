// Task 104

// function sumObjectValues(obj) {
//     let arr = [{ value: obj, step: 1 }]
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         const { value, step } = arr[i]
//         for (let key in value) {
//             if (typeof value[key] === 'object') {
//                 arr.push({ value: value[key], step: step + 1 })
//             } else if (typeof value[key] === 'number') {
//                 result.push(value[key])
//             }
//         }
//     }
//     return result.reduce((a, b) => a + b)
// }

// // // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// };

// console.log(sumObjectValues(obj)); 

// Task 105

// function rotateArrayLeft(arr, n) {
//     arr.forEach(item => {
//         let a = item.slice(1)
//         console.log(a)
//     })
// }

// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); 

// Task 106

// function removeDigits(str) {
//     let a = str.split('')
//     let result = a.filter(char => isNaN(char))
//     return result.join('')
// }

// // Test case
// console.log(removeDigits("abc123def456")); 
// // Output: "abcdef"

// Task 107

// function oddIndexedElements(arr) {
//     let result = [];
//     for (let i = 1; i < arr.length; i += 2) {
//         result.push(arr[i]);
//     }
//     return result;
// }

// Test case
// console.log(oddIndexedElements([1, 2, 3, 4, 5, 6])); 
// // Output: [2, 4, 6]

// Task 110

// function sortKeysByValue(obj) {
//     let arr = Object.keys(obj).sort((a,b) => b - a)
//     let new_obj = {}
//     for(let i = 0; i < arr.length; i++){
//         new_obj[arr[i]] = obj[arr[i]]
//     }
//     return new_obj
// }

// // Test case
// const obj = {
//     a: 3,
//     b: 1,
//     c: 2
// };
// console.log(sortKeysByValue(obj)); 
// // Output: { b: 1, c: 2, a: 3 }

// Task 108


// function doubleNumericValues(obj) {
//     let arr = {value: obj, step: 1}
//     for(let i = 0; i < arr.length; i++){
//         const {value, step} = arr[i]
//         for(let key in value){
//             if(typeof value[key] === "object"){
//                 arr.push({value: value[key],step: step + 1})
//             } else if(typeof value[key] === "number"){
//                 value[key] = value[key] * 2
//             }
//         }
//     }
//     console.log(obj)
//  }
 
//  // Test case
//  const obj = {
//      a: 1,
//      b: {
//          c: 2,
//          d: {
//              e: 3,
//              f: 4
//          }
//      }
//  };
//  console.log(doubleNumericValues(obj)); 
 // Output: { a: 2, b: { c: 4, d: { e: 6, f: 8 } } }

//  Task 105

// function rotateArrayLeft(arr, n) {
//     n = n % arr.length;
//     return arr.slice(n).concat(arr.slice(0, n));
// }

// // Test case
// console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); 
// // Output: [3, 4, 5, 1, 2]
