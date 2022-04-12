const printPattern = function(n){
  for(let row = 1; row <= n; row++){
    let str = "";

    for(let col = 1; col <= row; col++){
      str += col + " ";
    }
    
    console.log(str);
  }
}

printPattern(8);

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */
