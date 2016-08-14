import { expect } from 'chai';
import * as app from '../src';

describe('isPalindrome', () => {
  describe('123321', () => {
    it('should return true', () => {
      const expected = true;
      const actual = app.isPalindrome(123321);
      expect(actual).to.equal(expected);
    });
  });

  describe('12321', () => {
    it('should return false', () => {
      const expected = false;
      const actual = app.isPalindrome(123321);
      expect(actual).to.equal(expected);
    });
  });
});
