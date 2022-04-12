// 12. Write a JS code to find product of two arrays
// Function findProd() to generate a new array which is the product of two arrays of the same size using for loop.

// ! 배열의 같은 인덱스끼리 곱한 뒤 나머지 배열은 셈하지 않고 그대로 결과값(반환 배열)에 push
var arr1 = [3,45,23,78,34];
var arr2 = [4,2,34,4,12,1];

// 1. 반환할 새 배열을 추가
let arr3 = [];


const findProd = function (arr1, arr2) {
  
  // 2. 더 작은 배열의 수만큼 곱하고 push하기
  // 2-1. 둘 중 어느 배열이 더 작은지 모르니 Math.min 객체로 길이를 비교 후 
  // 2-2. 작은 값의 길이만큼 반복해 같은 인덱스끼리 곱한 값을 새 배열에 push
  for(let i = 0; i < Math.min(arr1.length, arr2.length); i++){
    // Math.min(value1, value2 ...) : 입력값으로 받은 0개 이상의 숫자 중 가장 작은 숫자를 반환
    arr3.push(arr1[i] * arr2[i]);
  }

  // 3. 더 큰 배열의 곱하지 않은 나머지 수들을 구해 push하기
  // 3-1. 둘 중 어느 배열이 더 작은지 모르니 Math.min 객체로 길이를 비교 후
  // 3-2. 더 큰 배열의 셈하지 않은 나머지 수의 첫 index는 작은 배열의 마지막 index + 1일테니 j를 작은 배열의 length로 지정(length == index + 1이기 때문)
  // 3-3. 둘 중 어느 배열이 더 큰지 모르니 Math.max 객체로 길이를 비교 후
  // 3-4. 더 큰 배열의 나머지 수들을 반환해야하므로 조건을 j < 큰 배열의 length로 주고 반복
  // 3-5. 만약 arr1이 더 큰 배열이라면 arr1의 나머지 값들을 새 배열에 push
  // 3-6. 그렇지 않다면 arr2가 더 큰 배열일테니 arr2의 나머지 값들을 새 배열에 push
  for(let j = Math.min(arr1.length, arr2.length); j < Math.max(arr1.length, arr2.length); j++){
    // Math.max(value1, value2 ...) : 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
    if(arr1.length > arr2.length){
      arr3.push(arr1[j]);
    }else{
      arr3.push(arr2[j]);
    }
  }

  // 4. 새 배열 반환
  return arr3;
}


console.log(findProd(arr1,arr2));

//[12, 90, 782, 312, 408, 1]

