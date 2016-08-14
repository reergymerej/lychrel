import { expect } from 'chai';
import * as app from '../src';

describe('isPalindrome', () => {
  describe('3', () => {
    it('should return true', () => {
      const expected = true;
      const actual = app.isPalindrome(3);
      expect(actual).to.equal(expected);
    });
  });

  describe('66', () => {
    it('should return true', () => {
      const expected = true;
      const actual = app.isPalindrome(66);
      expect(actual).to.equal(expected);
    });
  });

  describe('123321', () => {
    it('should return true', () => {
      const expected = true;
      const actual = app.isPalindrome(123321);
      expect(actual).to.equal(expected);
    });
  });

  describe('12321', () => {
    it('should return true', () => {
      const expected = true;
      const actual = app.isPalindrome(12321);
      expect(actual).to.equal(expected);
    });
  });

  describe('123221', () => {
    it('should return false', () => {
      const expected = false;
      const actual = app.isPalindrome(123221);
      expect(actual).to.equal(expected);
    });
  });

  describe('12', () => {
    it('should return false', () => {
      const expected = false;
      const actual = app.isPalindrome(12);
      expect(actual).to.equal(expected);
    });
  });
});

describe('reverseAndAdd', () => {
  describe('14', () => {
    it('should return 55', () => {
      const expected = 55;
      const actual = app.reverseAndAdd(14);
      expect(actual).to.equal(expected);
    });
  });

  describe('123', () => {
    it('should return 444', () => {
      const expected = 444;
      const actual = app.reverseAndAdd(123);
      expect(actual).to.equal(expected);
    });
  });
});
