/// sum zero ////

const sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true;
            }
        }
    }
    return false;
}

let test = sumZero([1, 4, -4]);
console.log(test);

//// O(n^2) /////



/////// unique chars ///////

const uniq = (str) => {
    let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(spChars.test(str)){
      return true;
    } else {
      return false;
    }
}


let doo = uniq('j*hahs)');
console.log(doo)

////// O(log n) //////



//////// pangram sentence ////////

const isPangram = (str) => {
    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  let beans = isPangram('The quick brown fox jumps over the lazy dog');
  console.log(beans);

/////// O(n) /////////


/////// longest word ///////

function findLongestWord(str) {
    var longestWord = 0;
    for(var i = 0; i < str.length; i++){
      if(str[i].length > longestWord){
      longestWord = str[i].length;
       }
    }
    return longestWord;
  }

  let gabagool = findLongestWord(['cool', 'apple', 'wakaflockaflame']);
  console.log(gabagool);

/////// O(n log n) ////////