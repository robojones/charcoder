const NUM = '0123456789'
const ABC = 'abcdefghijklmnopqrstuvwxyz'
const HEX = NUM + ABC.substring(0, 6)

class Charcoder {
  constructor(charset = HEX) {
    this.charset = charset
  }

  encode(number) {
    if(typeof number !== 'number') {
      throw new TypeError(`expected type: "number" (got: "${typeof number}")`)
    }
    if(isNaN(number)) {
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

  decode(string) {
    if(typeof string !== 'string') {
      throw new TypeError(`expected type: "string" (got: "${typeof string}")`)
    }

    const base = this.charset.length
    let number = 0

    string.split('').forEach(char => {
      const value = this.charset.indexOf(char)
      if(value === -1) {
        throw new TypeError(`character "${char}" not in charset`)
      }
      number *= base
      number += value
    })

    return number
  }
}

Charcoder.Charcoder = Charcoder
Charcoder.NUM = NUM
Charcoder.ABC = ABC
Charcoder.HEX = HEX
Charcoder.B62 = NUM + ABC + ABC.toUpperCase()

module.exports = Charcoder
