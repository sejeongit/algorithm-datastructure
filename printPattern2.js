// * * * * * * *
//   * * * * *
//     * * *
//       *   

const printPattern = (n) => {
   
  // 1. 줄을 만드는 반복문
  for(let row = 1; row <= n; row++) {
    let str = ""; // 2. 한 줄을 추가할 때마다 str을 비움

    let put_space = (row - 1) * 2; // 어떤 n을 입력하든 2개씩 공백을 추가하는 규칙

    // 3. " "을 입력하는 반복문 (* 앞에 공백을 입력해야하므로 *을 추가하는 반복문보다 먼저 실행)
    for(let space = 0; space < put_space; space++) {
        str += " "; // 찾아낸 규칙에 따라 * 앞에 둘째 줄부터 공백 추가
    }

    // 4. "* "을 입력하는 반복문
    for(let col = 1; col <= n * 2 - 1 - put_space; col++) {
        str += "* "; // 찾아낸 규칙에 따라 각 줄에 * 입력
    }
    console.log(str); // 한 줄씩 콘솔에 띄움
  }
}


// this is optimal solution;
// the optimal solution means it works for all cases of n
printPattern(10);

/*    // n = 5;     (n * 2) - 1;
* * * * * * * * * // n = 5   // n * 2 - 1
  * * * * * * * // n = 4 n + 2  // n * 2 - 1;
    * * * * * // n = 3
      * * * // n = 2
        *   
// how to print this pattern
*/


