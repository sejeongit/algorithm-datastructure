// 6. Write a JS code to find the power of a number using for loop
// 4^2 = 16 4 * 4
 // 3^3 = 27, 3 * 3 * 3
 // 4^3 = 64 // 4 * 4 * 4 * 4
 const numPower = function(n, m) {
  let result = n; // result can not be zero because when we multply result by n result changes to zero
    while(m > 1) { // repeat m times
        result = result * n; // put it in new result;
        // result 4, 16, 64
        // what is 1 * 4 ? 
        m--; // m is 0 after repeating 3 times
    }
 return result;
 // return result after multiplying n at m times to find numPower
}
const numPower2 = function(n, m) {
 let result = n; // result can not be zero because when we multply result by n result changes to zero
   while(m > 1) { // repeat m times
       result = result * n; // put it in new result;
       // result 4, 16, 64
       // what is 1 * 4 ? 
       m--; // m is 0 after repeating 3 times
   }
   return result;
// return result after multiplying n at m times to find numPower
}




console.log(numPower(4, 2)); // 16
console.log(numPower(3, 3)); // 27
console.log(numPower(4, 3)); // 64