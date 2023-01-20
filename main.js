function isPalindrome(str) {
  // Taking the str and storing it in an array. Also splitting the string into individual characters using split() method. Added map() method to turn each character using toLowerCase() method.
  let array = str.split("").map((char) => char.toLowerCase());
  //   Taking the array and reversing it using reverse() method
  let reverse = array.reverse();

   console.log(array);
   console.log(reverse);
   console.log(reverse.join(""));

  // Comparing the str with the reversed str. Also, using join() method to transform the split reversed str back into text. Added toLowerCase() method to str so the comparisson is true in case of the str being a palindrome.
  return str.toLowerCase() == reverse.join("")
    ? "It's a palindrome"
    : "It's not a palindrome";
}

console.log(isPalindrome("Malayalam"));
