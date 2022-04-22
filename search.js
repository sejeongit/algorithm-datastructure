var arr = [1, 2, 4, 8, 4, 6, 10, 32, 45];

function search(array, target){
  for(let i = 0; i < array.length; i++){
    if(array[i] == target){
      return i;
    }
  }
  return -1; // when funtion doesn't find element
}

search(arr, 6); // 5;

console.log(search(arr, 19));
