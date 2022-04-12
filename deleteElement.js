let counter = 0;
const deleteElement = function(arr, n) {
    // we're going to use for-loop to check each value in the array
    // we can use while-loop as well to check each value in array
    for(let i = 0; i < arr.length; i++) {
        // how to check if any value is equal to n
        if (arr[i] == n) {
            arr.splice(i, 1);
            // splice(starting, deleteCount(means how many number we want to delete))
        }
    }

    return arr; // we want to return array after remove
}    