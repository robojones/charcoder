const NUM = '0123456789'
const ABC = 'abcdefghijklmnopqrstuvwxyz'
const HEX = NUM + ABC.substring(0, 6)

/** 
 * Class representing a number converter.
 * @class
 */
class Charcoder {
  /**
   * Create a number converter.
   * @param {string} charset - Digits of your numeral system.
   */
  constructor(charset = HEX) {
    this.charset = charset
  }

  /**
   * Encode a number into your numerals system.
   * @param {number} number - Number to convert.
   * @returns {string} - String representing the number.
   */
  encode(number) {
    if (typeof number !== 'number') {
      throw new TypeError(`expected type: "number" (got: "${typeof number}")`)
    }
    if (isNaN(number)) {
      throw new TypeError('number is NaN')
    }

    const base = this.charset.length
    const result = []

    do {
      result.push(this.charset[number % base])
      number = Math.floor(number / base)
    } while (number)

    return result.reverse().join('')
  }

  /**
   * Decode a string into a number.
   * @param {string} string - String representing a number in your numeral system.
   * @returns {number} - Number that the string represents.
   */
  decode(string) {
    if (typeof string !== 'string') {
      throw new TypeError(`expected type: "string" (got: "${typeof string}")`)
    }

    const base = this.charset.length
    let number = 0

    string.split('').forEach(char => {
      const value = this.charset.indexOf(char)
      if (value === -1) {
        throw new TypeError(`character "${char}" not in charset`)
      }
      number *= base
      number += value
    })

    return number
  }
}

/**
 * @property {Charcoder}
 */
Charcoder.Charcoder = Charcoder

/**
 * The decimal system.
 * @property {string} - String containing the digits 0-9.
 */
Charcoder.NUM = NUM

/**
 * The alphabet.
 * @property {string} - String containing the digits a-z.
 */
Charcoder.ABC = ABC

/**
 * The hexadecimal system.
 * @property {string} - String containing the digits 0-9a-z.
 */
Charcoder.HEX = HEX

/**
 * The duosexagesimal system.
 * @property {string} - String containing the digits 0-9a-zA-Z.
 */
Charcoder.B62 = NUM + ABC + ABC.toUpperCase()

module.exports = Charcoder
