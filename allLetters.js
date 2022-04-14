// Write a JS code to count all letters in a word
// Program to find the count of all letters in a word using double for loops.

// let str = "hello";
// let arr = ['h', 'e', 'l', 'l', 'o'] // same as str
// console.log(str.length);
// console.log(str[0]);


// map comes always with key-value pair
let str = "helloworldhello"
  var map = new Map()
  
  for(var i = 0; i < str.length; i++) {
    if (map[str[i]] == undefined) map[str[i]] = 1;
    else
    map[str[i]] = map[str[i]] + 1;
  }
  
    for(let i = 0; i < str.length; i++) {
      if (map[str[i]] != 0) {
        console.log(str[i] + ": " + map[str[i]] + " ")
        map[str[i]] = 0;
      }
    }
      for (const [key, value] of map) {
  		console.log(key + ' = ' + value)
	}


  let str2 = "Suggesting";
  let count = new Array(26);
  str2 = str2.toLowerCase();
  for(let j = 0; j<str2.length; j++){

  }

  // var arr = new Array(10);
  // arr[1] = 100;
  // console.log(arr[1]); // 100
  // arr['my_name'] = 100;
  // console.log(arr['my_name']); // 100

  // var map = new Map();
  // map[1] = 100;
  // console.log(map[1]); // 100
  // map['my_name'] = 100;
  // console.log(map['my_name']); // 100