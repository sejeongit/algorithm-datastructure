 var arr = [1, 2, 4, 6, 8, 10, 19, 22, 32, 45];
  	                        
  /*            0  1  2  3  4  5  6.  7    8// array is already sorted.
           
             array elements are in increasing order
           
           first we check middle element with target, if middle elem is greater than
           target, 
           1. find mid element
           2. if mid == target return mid
           3. if mid > target go to left side
           4. if mid < target go to right side
   // binary search */
   function search(array, target) {
      
         
       let l = 0;
       let r = array.length;
       // mid = (l + r)/2.
       // mid = l + (r-l)/2;
       while( l < r) {
       
           let mid =  Math.floor((l + r) / 2); // this is correct r 
           console.log(mid + " ")
           if (array[mid] == target) { 
               return mid;
           } else if (array[mid] > target){ 
               r = mid - 1;
           } else  {
               l = mid + 1; 
           }
         
       }
       return -1;
       
   }
   
 if (search(arr, 4) != -1) {
     console.log("your answer is found")
 } else {
     console.log("the answer is not found")
 }