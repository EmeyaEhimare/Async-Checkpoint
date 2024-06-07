//Task 01:
//Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and 
//logs each value with a delay of 1 second between logs.

async function iterateWithAsyncAwait(arr) {
    for(Element of arr){
        console.log(Element);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

iterateWithAsyncAwait([1, 2, 3, 4, 5])

