function reverseString(str) {
  return str;
}

reverseString("hello");

//How to reverse a String()

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");