// 7. Write a JS code to print a pattern using for loop
// Function printPattern() is used to print a pattern for a given range using nested for loop.

const printPattern = function(n) {

  for(let row = 1; row <= n; row++) { // this is outer loop
    // i have to print 8 numbers here and go out again ... and come and print 8 numbers
      // i want to print 8 numbers, so what should I do, 
      var str = "";
      for(let col = 1; col <= n; col++) {
          str += col + " "; // this is making new line 
          // like document.write(col + "\n");
      } // end here
      console.log(str)
  }
}

/*
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8
*/





const printPattern2 = function(n) {

  for(let row = 1; row <= n; row++) { // this is outer loop
    // i have to print 8 numbers here and go out again ... and come and print 8 numbers
      // i want to print 8 numbers, so what should I do, 
      var str = "";
      for(let col = 1; col <= row; col++) {
          str += col + " "; // this is making new line 
          // like document.write(col + "\n");
      } // end here
      console.log(str)
  }
}

/*
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6 
1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8
*/





const printPattern3 = function(n) {

  for(let row = 1; row <= n; row++) { // this is outer loop
    // i have to print 8 numbers here and go out again ... and come and print 8 numbers
      // i want to print 8 numbers, so what should I do, 
      var str = "";
      for(let col = 1; col <= n - (row - 1); col++) {
          str += col + " "; // this is making new line 
          // like document.write(col + "\n");
      } // end here
      console.log(str);
    }
  }       

  /*
  1 2 3 4 5 6 7 8
  1 2 3 4 5 6 7 
  1 2 3 4 5 6 
  1 2 3 4 5 
  1 2 3 4
  1 2 3
  1 2
  1
  */


  const printPattern4 = function(n) {

    for(let row = 1; row <= n; row++){
      var str = "";
  
      for(let i = 1; i <= n - row; i++) { 
        str += " "; 
      }
      // for (let i = 8; i >= 0; i--) this is going from back to front
      // for (let i = 0; i <= 8; i++) this is going from front to back 
      // let i = start; i <= end; i++
      // in reverse order 
      // this can be like 
      // let i = end; i >= start; i--
  
      let k = n - row + 1;
      for(let col = 1; col <= row; col++){
        str += k ;
        k += 1;
      }
      
      console.log(str);
    }
  }

  /*
                8
              7 8
            6 7 8
          5 6 7 8
        4 5 6 7 8
      3 4 5 6 7 8
    2 3 4 5 6 7 8
  1 2 3 4 5 6 7 8
  */



// 1. build row
// 2. buld col for each row
// 3. let's say you have some col, but you have to increaser a number of column in each row

const printPattern5 = function (n) {
  for(let row = 1; row <= n; row++){
    let str = "";
  
    let num = n 
    for(let col = 1; col <= row; col++){
      str += num;
      num -= 1;
    }
    console.log(str);
  }
}

printPattern5(8)


/*
8
87
876
8765
87654
876543
8765432
87654321
*/


const printPattern6 = function(n) {
  let any_var = 0;

  for(let row = 1; row <= n; row++){
    let str = "";

    for(let space = 1; space <= n + 3 - any_var; space++){
      str += " ";
    }
    
    for(let star = 1; star <= n - 4 + any_var; star++){
      str += "* ";
    }

    console.log(str);

    any_var += 2;
  }
}

printPattern6(5)

/*
      	*
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *

*/


// - description
let any_var = 0;
let k = 0;
for(let row = 1; row <= 10; row++) {
       // row = 2
       // any_var = row - 2;
  for(let col = 1; col <= 10 - k; col++) {
       document.write(col + " ");   
      }
      any_var += 5;
      /// to make it dynamic
      k += 2;
      // as soon as we change k, in each row
      // we can have dymamic col size;
      
      document.write("<br>")
      
  }
// what should we do 


// 1. build row
// 2. buld col for each row
// 3. let's say you have some col, but you have to increaser a number of column in each row
// 4. 


//      	*
//      * * *
//    * * * * *
//  * * * * * * *
//* * * * * * * * *
// I want to comment all, what is keyboard key
// n = 5
// printing stuff consists of * and space

// 1. make a (for loop) for row
// 2. make column for space and then put n star in each row
// 2. you have n = 5, row = 1;
