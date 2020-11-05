/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  isValid,
  isValidHour,
  isValidMinute,
  valueTo2DigitString,
} from './timeinput';

describe('timeinput', () => {
  describe('valueTo2DigitString', () => {
    it('should cast a number value to string', () => {
      expect(valueTo2DigitString(0)).toBe('00');
      expect(valueTo2DigitString(15)).toBe('15');
      expect(valueTo2DigitString(20)).toBe('20');
    });
    it('should prepend zeros for numbers smaller than 10', () => {
      expect(valueTo2DigitString(8)).toBe('08');
      expect(valueTo2DigitString(0)).toBe('00');
    });
  });

  describe('isValidHour', () => {
    it('should return true with an integer between 0 and 23', () => {
      expect(isValidHour(0)).toBeTruthy();
      expect(isValidHour(10)).toBeTruthy();
      expect(isValidHour(12)).toBeTruthy();
      expect(isValidHour(23)).toBeTruthy();
    });
    it('should return true with a string representing an integer between 0 and 23', () => {
      expect(isValidHour('0')).toBeTruthy();
      expect(isValidHour('00')).toBeTruthy();
      expect(isValidHour('10')).toBeTruthy();
      expect(isValidHour('12')).toBeTruthy();
      expect(isValidHour('23')).toBeTruthy();
    });
    it('should return false with a float', () => {
      expect(isValidHour(0.3)).toBeFalsy();
      expect(isValidHour(5.1)).toBeFalsy();
      expect(isValidHour(20.1)).toBeFalsy();
      expect(isValidHour(-5.1)).toBeFalsy();
      expect(isValidHour(-5.0)).toBeFalsy();
      expect(isValidHour(35.0)).toBeFalsy();
      expect(isValidHour(35.1)).toBeFalsy();
    });
    it('should return false with a string representing a float', () => {
      expect(isValidHour('0.3')).toBeFalsy();
      expect(isValidHour('-5.1')).toBeFalsy();
      expect(isValidHour('5.0')).toBeFalsy();
    });
    it('should return false with an integer outside the valid range', () => {
      expect(isValidHour(-1)).toBeFalsy();
      expect(isValidHour(24)).toBeFalsy();
      expect(isValidHour(25)).toBeFalsy();
    });
    it('should return false with a string representing an integer outside the valid range or with invalid leading zeros', () => {
      expect(isValidHour('0000008')).toBeFalsy();
      expect(isValidHour('005')).toBeFalsy();
      expect(isValidHour('25')).toBeFalsy();
      expect(isValidHour('-1')).toBeFalsy();
    });
  });

  describe('isValidMinute', () => {
    it('should return true with an integer between 0 and 59', () => {
      expect(isValidMinute(0)).toBeTruthy();
      expect(isValidMinute(10)).toBeTruthy();
      expect(isValidMinute(12)).toBeTruthy();
      expect(isValidMinute(23)).toBeTruthy();
      expect(isValidMinute(59)).toBeTruthy();
    });
    it('should return true with a string representing an integer between 0 and 59', () => {
      expect(isValidMinute('0')).toBeTruthy();
      expect(isValidMinute('00')).toBeTruthy();
      expect(isValidMinute('20')).toBeTruthy();
      expect(isValidMinute('45')).toBeTruthy();
      expect(isValidMinute('59')).toBeTruthy();
    });
    it('should return false with a float', () => {
      expect(isValidMinute(-5.1)).toBeFalsy();
      expect(isValidMinute(-5.0)).toBeFalsy();
      expect(isValidMinute(0.3)).toBeFalsy();
      expect(isValidMinute(5.1)).toBeFalsy();
      expect(isValidMinute(20.1)).toBeFalsy();
      expect(isValidMinute(50.1)).toBeFalsy();
      expect(isValidMinute(65.1)).toBeFalsy();
    });
    it('should return false with a string representing a float', () => {
      expect(isValidMinute('0.3')).toBeFalsy();
      expect(isValidMinute('5.0')).toBeFalsy();
      expect(isValidMinute('15.0')).toBeFalsy();
      expect(isValidMinute('25.0')).toBeFalsy();
      expect(isValidMinute('66.0')).toBeFalsy();
    });
    it('should return false with an integer outside the valid range', () => {
      expect(isValidMinute(-1)).toBeFalsy();
      expect(isValidMinute(60)).toBeFalsy();
      expect(isValidMinute(75)).toBeFalsy();
    });
    it('should return false with a string representing an integer outside the valid range or with invalid leading zeros', () => {
      expect(isValidMinute('-1')).toBeFalsy();
      expect(isValidMinute('0000008')).toBeFalsy();
      expect(isValidMinute('005')).toBeFalsy();
      expect(isValidMinute('65')).toBeFalsy();
      expect(isValidMinute('75')).toBeFalsy();
    });
  });

  describe('isValid', () => {
    it('should return false with an empty input', () => {
      expect(isValid('', -Infinity, Infinity)).toBeFalsy();
      expect(isValid(' ', -Infinity, Infinity)).toBeFalsy();
      expect(isValid('NaN', -Infinity, Infinity)).toBeFalsy();
      expect(isValid(null, -Infinity, Infinity)).toBeFalsy();
      expect(isValid(undefined, -Infinity, Infinity)).toBeFalsy();
    });
    it('should return false with invalid inputs containing special characters - or +', () => {
      expect(isValid('-1', -Infinity, Infinity)).toBeFalsy();
      expect(isValid('+1', -Infinity, Infinity)).toBeFalsy();
      expect(isValid('1+1', -Infinity, Infinity)).toBeFalsy();
      expect(isValid('0-0', -Infinity, Infinity)).toBeFalsy();
    });
  });
});
