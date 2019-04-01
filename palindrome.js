// event listener has the form data and starts the palindrome function
button.addEventListener("click", function(str){ 
let button = document.querySelector("button");
let input = document.querySelector("#input").value;
  // start of palindrome function
function palindrome(str) {
	str = str.replace(/[-_|.():,/ /]/g, '').toLowerCase();
  let string = str.split("").reverse().join("");
  return document.querySelector("#outPut").innerHTML = string == str
;}
palindrome(input);});