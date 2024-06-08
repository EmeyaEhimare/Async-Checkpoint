
import axios from 'axios';

//Task 01:
//Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and 
//logs each value with a delay of 1 second between logs.


// async function iterateWithAsyncAwait(arr) {
//     for(Element of arr){
//         console.log(Element);
//         await new Promise(resolve => setTimeout(resolve, 1000));
//     }
// }

// iterateWithAsyncAwait([1, 2, 3, 4, 5])

// Task 02:
// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API.
// Use await to wait for the API response and then log the data.

// async function awaitCall() {
//     let response = await axios ('https://jsonplaceholder.typicode.com/posts/1');
//     console.log(response.data)  
// }

// awaitCall();


// Task 03:
// Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. 
// If the API call fails, catch the error and log a user-friendly error message.
// async function awaitCall() {
//     try{ 
//       let response = await axios ('https://jsonplaceholder.typicode.com/posts/1');
//       console.log(response.data)
//   } catch(error){
//       console.error(`Your fault: ${error}`
//       )}
//   }

// awaitCall();


// Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially.
//  Each function should log a message after a delay of 1 second. Chain these functions using await

async function firstChain (){
    try{
    let response = await axios('https://m.youtube.com/watch?v=tBhPTk5lksc')
    return  response.data
    }
    catch(error){
        console.error(`Your fault: ${error}`)
    }
}

async function secondChain (){
    try{
    let response = await axios('https://jsonplaceholder.typicode.com/guide/')
    return  response.data
    }
    catch(error){
        console.error(`Your fault: ${error}`)
    }
}

async function thirdChain (){
    try{
    let response = await axios('https://randomuser.me/')
    return  response.data
    }
    catch(error){
        console.error(`Your fault: ${error}`)
    }
}

async function chainedAsyncFunctions(){
    const result1  = await  firstChain();
    const result2 = await   secondChain();
    const result3 = await thirdChain();
    console.log(result1, result2, result3);
}

chainedAsyncFunctions();


