# lychrel

## isPalindrome(val)
* @param {String/Number} `val`
* @return {Boolean}

```js
import {isPalindrome} from 'lychrel';

isPalindrome(123321);  // true
isPalindrome('otto');  // false
```


## reverseAndAdd(val)
* @param {Number} `val`
* @return {Number}

```js
import {reverseAndAdd} from 'lychrel';

reverseAndAdd(14);  // 55
reverseAndAdd(123);  // 444
```


## isLychrel(val, maxIterations)
* @param {Number} `val`
* @param {Number} `[maxIterations = 100]`
* @return {Object}
  * {Boolean/undefined} isLychrel
  * {Number} lastValue
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
