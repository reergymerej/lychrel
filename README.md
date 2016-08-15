# lychrel

test for [Lychrel numbers][1]

v1.0.1 [![Build Status](https://travis-ci.org/reergymerej/lychrel.svg?branch=master)](https://travis-ci.org/reergymerej/lychrel)  

## isPalindrome(val)
Checks if a number/string is a palindrome
* @param {String/Number} `val`
* @return {Boolean}

```js
import {isPalindrome} from 'lychrel';

isPalindrome(123321);  // true
isPalindrome('otto');  // true
isPalindrome(123);  // false
```


## reverseAndAdd(val)
Reverses the digits in a number and adds it to the original
* @param {Number} `val`
* @return {Number}

```js
import {reverseAndAdd} from 'lychrel';

reverseAndAdd(14);  // 55
reverseAndAdd(123);  // 444
```


## isLychrel(val, maxIterations)
Attempts to determine if a number is a Lychrel number.  Quits after max iterations.
* @param {Number} `val`
* @param {Number} `[maxIterations = 100]`
* @return {Object}
  * {Boolean/undefined} isLychrel - false if disproven, undefined if indeterminate before max iterations
  * {Number} lastValue - last calculated value
  * {Number} iterations

```js
import {isLychrel} from 'lychrel';

isLychrel(89);
// {
//   isLychrel: false,
//   lastValue: 8813200023188,
//   iterations: 24,
// }

isLychrel(196);
// {
//   isLychrel: undefined,
//   lastValue: 820255645655561900,
//   iterations: 100,
// }

isLychrel(196, 200);
// {
//   isLychrel: undefined,
//   lastValue: 3417785356534986000,
//   iterations: 200,
// }
```







---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
[1]: https://en.wikipedia.org/wiki/Lychrel_number
