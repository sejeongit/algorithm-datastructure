// fibonacci numbers
// if n = 8, fibNum is 21

const fib = (n) => {
  let prevNum = 0; // 첫번째 수를 정의
  let prevNum2 = 1; // 두번째 수를 정의
  let fibNum;
  if(n == 0){
    fibNum = 0;
  }else {
    for(let i = 1; i < n; i++){ // 3번째의 수를 구하려면 2번의 덧셈을 해야하기에 i = 1, i < n
      fibNum = prevNum + prevNum2;
      prevNum = prevNum2;
      prevNum2 = fibNum; 
    }
  }
  console.log(fibNum);
}

fib(3);


// recursive ver.
// 0, 1, 1, 2, 3, 5 
// what is the most imporant thing in recursive function
// base step
// because recursive function has to stop somewhere
const fib2 = function(n) {

if (n == 0) return 0;
  if (n == 1) return 1;
  
  return fib2(n - 1) + fib2(n - 2);

}

  
console.log(fib2(5));
