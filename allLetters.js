// Write a JS code to count all letters in a word
// Program to find the count of all letters in a word using double for loops.

// let str = "hello";
// let arr = ['h', 'e', 'l', 'l', 'o'] // same as str
// const allLetters = function(){
//   for(let i=0; i < str.length; i++){

//   }
// }

let str = "helloworldhello"
  var map = new Map()
  
  for(var i = 0; i < str.length; i++) {
    if (map[str[i]] == undefined) map[str[i]] = 1;
    else
    map[str[i]] = map[str[i]] + 1;
  }
  
    for(let i = 0; i < str.length; i++) {
      if (map[str[i]] != 0) {
        document.write(str[i] + ": " + map[str[i]] + " ")
        map[str[i]] = 0;
      }
    }
      for (const [key, value] of map) {
  		document.write(key + ' = ' + value)
	}