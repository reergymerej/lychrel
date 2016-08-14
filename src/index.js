export function isPalindrome(num) {
  let is = true;
  const numString = num + '';
  const length = numString.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; is && i < middle; i++) {
    is = numString[i] === numString[length - 1 - i];
  }

  return is;
}
