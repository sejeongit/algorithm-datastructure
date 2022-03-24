const arr = 
[[0,1,1,0],
[0,1,0,0],
[1,0,0,0],
[0,0,0,1]];

let count = 0;
const countZero = function(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] == 0){
        count++;
      }
    }
  }
  console.log(count) ;
}

countZero(arr);
 

let arr2 =  
 [[0,1,1,0],
 [0,1,0,0],
 [1,0,0,0],
 [0,0,0,1]];
 //  index out of bound
 for(let row = 4-1; row >= 0; row--) {
 	for(let col = 4-1; col >= 0; col--) {
    	document.write(arr2[col][row]);
    }
 }

 // 4 X 4 how to count the number of zeros in 2D matrix;