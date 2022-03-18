// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

let str = "";

const printPattern = (n) => {
  let new_var = n * 2 - 1; // 어떤 n을 입력하든 2개씩 글자를 추가하는 규칙

  // 1. 줄을 만드는 반복문
  for(let row = 1; row <= new_var; row++){
    str = ""; // 2. 한 줄을 추가할 때마다 str을 비움

    // 3. "* "을 입력하는 반복문
    // 줄의 순서가 n번째보다 전이거나 같으면 n번째 줄에 n개까지 *을 입력
    if(row <= n){
      for(let col = 1; col <= row; col++){
        str += "* ";
      }
    // 줄의 순서가 n번째보다 나중이면 n+1번째 줄부터 *을 -1개씩 입력
    }else{
      for(let col = 1; col <= n - (row - n); col++){
        str += "* ";
      }
    }
    console.log(str); // 한 줄씩 콘솔에 띄움
  }
}

printPattern(5);
