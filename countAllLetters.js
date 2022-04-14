// Write a JS code to count all letters in a word
// Program to find the count of all letters in a word using double for loops.

// 1. using map()
// * map comes always with key-value pair
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


  // 2. 
  let str2 = "Suggesting";
  let count = new Array(26); // new Array(element0, element1 ...) : element들로 구성된 새 배열을 만듦. 자료형이 숫자일 경우 배열 개수(arrayLength)로 간주하고 한번밖에 쓸 수 없음. 이렇게 생성한 배열은 arrayLength 만큼의 빈 슬롯을 가지는 것으로, undefined를 출력함. 
  str2 = str2.toLowerCase();
  for(let j = 0; j<str2.length; j++){
    if(count[str.charCodeAt(j)-97]){
      count[str.charCodeAt(j)-97]++; // Increment count
    }
    else{
      count[str.charCodeAt(i)-97] = 1; // Add entry
    }
  }
  for(let j=0; j<26; j++){
    if(count[i]){
      console.log(`Character ${i+'a'} has occured ${count[i]} number of times`);
    }
  }


