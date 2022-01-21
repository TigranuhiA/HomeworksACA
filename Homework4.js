//4.1 Given a word and a list of possible anagrams, select the //correct sublist.
function findAnagram(word, arr) {
    let newArr=[];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        if (word.length === arr[i].length) {
           let arrWord = arr[i];
           for (let j = 0; j < word.length; j++) {
                for (let k = 0; k < word.length; k++) {
                    if (word[j]===arrWord[k]) {
                        count++;
                        break;
                    }
                } 
            }
        }
        if (count === word.length) {
        newArr.push(arr[i])
       } 
    } console.log(newArr); 
    return newArr;
}
findAnagram("listen", ["enlists", "google", "inlets", "banana"])

4.2 Write a function which receives two strings and removes appearances of the second string from the first one. 

function delateStr2InStr1 (str1, str2) {
    let newString = '';
    for(let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str1.length; j++){
            if(j === str2.length) {
                newString += "";
                i--;
                break;
            } else if(str1[i] ===str2[j]){
                i++;
                continue;
              } else{
                    newString += str1[i];
               }
               break;
        }   
		
    }  console.log(newString);
    return newString;
}

delateStr2InStr1 ("This is some text.", 'is')


//4.3 Given a sentences with missing and an array of words, replace all "_" in a sentance with the words from the array

function replace(sentance, arr) {
    let newSntnc = "";
    let count = 0;
    for (let i = 0; i < sentance.length; i++) {
        if(sentance[i] === "_"){
            count++
            for (let j = count-1; j < arr.length; j++) {
                newSntnc += arr[j];
                break;
            }
        } else{
            newSntnc += sentance[i];
          }
        
    } console.log(newSntnc);
    return newSntnc;
}
replace("_, we have a _.", ["Houston", "problem"])


//4.4 Find the longest word in a string, words can be separated by space, comma, hypen.

function findLongestWord(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i] === "-" || str[i] === "," ){
            newStr += " ";
        } else{
            newStr += str[i];
          }
        
    } console.log(newStr);
    let longestWord = newStr.split(' ').sort(function(a, b) { return b.length - a.length; });
    console.log(longestWord[0]);
    return longestWord[0]
  }
  findLongestWord("Which would be worse-to live as a monster, or to die as a good man?");

