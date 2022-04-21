// Write a JS code to count all letters in a word
// Program to find the count of all letters in a word using double for loops.

// abcdefghijklmnopqrstuvwxyz == 1000000000000 ==> 97~122

// A~Z ==> 65~90

let str = "helloworldhello";
// let map = new Map();
// map['h']++; // but it takes more time than array because we access array value by index faster than map
let arr = new Array(26);

for(let i = 0; i < str.length; i++) {

    let take = str[i];
    if (arr[str.charCodeAt(i) - 97] != undefined) continue;
    for(let j = 0; j < str.length; j++) {
        
        if (take == str[j]) {
            if (arr[str.charCodeAt(j) - 97] == undefined) arr[str.charCodeAt(j) - 97] = 1;
            else
            arr[str.charCodeAt(j) - 97]++; // O(1)
        } 
    }
    console.log(take + " : " + arr[take.charCodeAt(0) - 97])
} 
