//5.1 Implement following array methods:
// Concat

// function concat(arr1,arr2) {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArr.push(arr1[i]);   
//     }
//     for (let j = 0; j < arr2.length; j++) {
//         newArr.push(arr2[j]);   
//     }console.log(newArr);
//     return newArr;
// }
// concat([1,3,5],[5,6,3])

//5.1 Implement following array methods:
// Fill

// function fill (arr, value, start, end) {
//     for (let i = 0; i < arr.length; i++) {
//         if ((i > start || i === start) && (i<end || i === end)) {
//             arr[i] = value;
//         }
//     }
//     console.log(arr);
//     return arr;
// }
// fill([1,3,5,6,7,8,9,10], 15, 3, 5);

// //[1,3,5,15,15,15,9,10]

//5.1 Implement following array methods:
// Find

// function find(arr,elem) {
//    for (let i = 0; i< arr.length; i++) {
//     if (arr[i] !== elem) {
//         continue;
//     } else {
//         //console.log(elem);
//         return elem;
//         break;
//        }
      
//    } 
//    //console.log(elem = undefined);
//     return undefined; 
// }
// find([1,2,3,4,5,6,7],9)

//5.1 Implement following array methods:
// findIndex


// function findIndex(arr,elem) {
//    for (let i = 0; i< arr.length; i++) {
//     if (arr[i] !== elem) {
//         continue;
//     } else {
//         console.log(i);
//         return i;
//         break;
//        }
      
//    } 
//    console.log(elem = -1);
//     return -1; 
// }
// findIndex([1,2,3,4,5,6,7],7);




// // 5.2 Given an array. Determine whether it consists only of unique items or not
// function consistOfUnique(array) {
//     let unique = true;
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length-1; j++) {
//             if (array[i] === array[j]) {
//                 unique = false;
//                 break;
//             } 
            
//         }
        
//     }console.log(unique); 
//     return unique;
//     }
//     consistOfUnique([5,8,8,4]);
//     consistOfUnique([5,8,4]);
    


// 5.3 Determine if a word or phrase is an anagram.

// function isIsogram(str1) {
//     isIsogram = true; 
//     let string = str1.toLowerCase();
//     let newStr ="";
    
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === " ") {
//             newStr += "";
//         }
//         else{newStr += string[i];}
//     }console.log(newStr);

//         for (let i = 0; i < newStr.length; i++) {
//             for (let j = i+1; j < newStr.length; j++){
//                 if (newStr[i] === newStr[j]) {
//                     isIsogram = false;
//                     break;
//                 }        
//             }
//         } console.log(isIsogram);
//         return isIsogram;
// }
// //isIsogram("arfghsjy  l ue ");
// isIsogram("arflghsjylukfe");

// 5.4 Also please take a look at Lodash documentation and try to implement the following functions

// _.tail

// function implementTail(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] === array[i+1];
//     }  array.length = array.length-1; 
//         console.log(array);
//         return array;
// }
// implementTail([1,2,3,4,5]);


//_.pull
// function implementPull(array, value) {
//      let arr = [];
//     for (let i = 0; i < array.length; i++) { 
//        if (array[i] === value) {
//            continue;
//        } else {
//         arr.push(array[i]);  
//         }
//     }  
//     console.log(arr);
//     return arr;
// }
// implementPull([1,2,5,3,4,5], 5);


//_.intersection

// function implementIntersection(arr1, arr2) {
//      let  newarr = [];
//     for (let i = 0; i < arr1.length; i++) { 
//        for (let j = 0; j < arr2.length; j++) {
//            if (arr1[i] === arr2[j]) {
//                newarr.push(arr1[i]) 
//            }
           
//        }
//     }  
//     console.log(newarr);
//     return newarr;
// }
// implementIntersection([1,2,5,3,4,], [2,4,5]);

// _.take

// function implementTake(arr, number) {
//     let newArr = [];
//     for (let i = 0; i < number; i++) { 
//         if(number == undefined){
//             newArr.push(arr[0]);
//             console.log(newArr);
//            break; // ays paymany chi ashxatum
//         }
//         if (number > arr.length) {
//             number = arr.length;
//             newArr.push(arr[i]);
//         }
//          else {newArr.push(arr[i]);}
//     }  
//     console.log(newArr);
//     return newArr;
// }
// implementTake([1,2,5,3,4], 3 );
// implementTake([1,2,5,3,4], 7 );
// implementTake([1,2,5,3,4], 0 );
// implementTake([1,2,5,3,4]);