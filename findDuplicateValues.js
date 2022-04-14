// Write a JS code to find duplicate values in a given array
// Function findDup() to returns all the elements that are repeated more than once in a given array.

let arr = ['element', 1, 2, 'element', 1, 'element'];
// indexOf() : 배열에서 지정된 요소를 찾을 수 있는 첫번째 인덱스를 반환하고 존재하지 않으면 -1을 반환함.

const findDup = (arr) => {
  let arrDup = [];
  for(let i=0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) != i && arrDup.indexOf(arr[i]) == -1){
      // arr에서 arr[i]의 인덱스가 i가 아닐때 : 값이 중복되지 않는다면 순서 그대로 i를 반환하겠지만, 값이 중복된다면 indexOf()는 첫번째 인덱스를 반환하기 때문에 중복되는 두번째 이상의 값부터는 첫번째 중복값의 순서를 반환할 것이다. 그러므로 i가 아닌 수를 반환한다.
      // arrDup에서 arr[i]의 인덱스가 -1이 아닐때 : indexOf()는 값이 없으면 -1을 반환하기 때문에 -> arrDup에 arr[i]가 존재하지 않을 때 로 해석 가능하다. 
      arrDup.push(arr[i]);
      // 그러므로 arr[i]의 값이 중복되고, arrDup에 그 arr[i]가 존재하지 않으면 arr[i]을 arrDup에 push한다. 
    }
  }
  return arrDup;
}

console.log(findDup(arr));