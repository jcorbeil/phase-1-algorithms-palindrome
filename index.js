function isPalindrome(word) {
  // Write your algorithm here
  console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("robot"));     // false
console.log(isPalindrome("level"));     // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("noon"));      // true

}
function isPalindrome(string) {
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
}

function isPalindrome(string) {
  const length = string.length;
  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}


/* 
  Add your pseudocode here
  function isPalindrome(string):
    reversedString = reverse the string
    if string is equal to reversedString:
        return true
    else:
        return false

*//*
  Add written explanation of your solution here
  Certainly! Here's an explanation of the solution:

The `isPalindrome` function takes a string as input and determines whether it is a palindrome or not. 

The solution works by comparing the characters of the string from the beginning and the end. If the characters at the corresponding positions are equal, 
it continues checking the next pair of characters. If any pair of characters is found to be different, the function immediately returns `false`, indicating that the string is not a palindrome. If all pairs 
of characters are the same, the function returns `true`, indicating that the string is a palindrome.

Here's how the solution works step by step:

1. The function takes the input string and finds its length using the `length` property (`const length = string.length`).

2. It then iterates through the string using a `for` loop. The loop variable `i` starts from 0 and goes up to `length / 2` (exclusive of `length / 2`). This ensures that we only check up to the middle of the string.

3. Inside the loop, the function compares the characters at the current position `i` and the corresponding position from the end (`length - 1 - i`). If these characters are not equal, the function immediately returns `false`, indicating that the string is not a palindrome.

4. If all pairs of characters are found to be equal, the loop completes without returning `false`. In this case, the function concludes that the string is a palindrome and returns `true`.

The solution avoids unnecessary string manipulation by not creating a reversed string explicitly. Instead, it compares the characters directly, resulting in a more efficient implementation.

Overall, the solution effectively determines whether a given string is a palindrome by comparing characters from the beginning and end, and it returns the appropriate boolean value (`true` or `false`) based on the result of the comparison.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
