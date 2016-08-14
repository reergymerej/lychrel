export function isPalindrome(val) {
  let is = true;
  const valString = val + '';
  const length = valString.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; is && i < middle; i++) {
    is = valString[i] === valString[length - 1 - i];
  }

  return is;
}
