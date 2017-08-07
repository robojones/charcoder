const assert = require('assert')

describe('Charcoder', function () {
  const Charcoder = require('./../index')

  it('should be a function (class)', function () {
    assert.strictEqual(typeof Charcoder, 'function')
  })

  describe('instance', function () {
    describe('encode', function () {
      it('should throw if number is not a number', function () {
        const hex = new Charcoder()
        assert.throws(() => {
          hex.encode('this is a string')
        })
      })

      it('should throw if number is NaN', function () {
        const hex = new Charcoder()
        assert.throws(() => {
          hex.encode(NaN)
        })
      })

      it('should convert to hex by default', function () {
        const hex = new Charcoder()
        assert.strictEqual(parseInt('0x' + hex.encode(111)), 111)
      })

      it('should be able to convert into binary', function () {
        const binary = new Charcoder('01')
        assert.strictEqual(binary.encode(2), '10')
      })
    })

    describe('decode', function () {
      it('should throw if string is not a string', function () {
        const hex = new Charcoder()
        assert.throws(() => {
          hex.decode(100)
        })
      })

      it('should throw if string contains invalid characters', function () {
        const hex = new Charcoder()
        assert.throws(() => {
          hex.decode('g')
        })
      })

      it('should be able to decode from binary', function () {
        const binary = new Charcoder('01')
        const string = binary.encode(111)
        assert.strictEqual(binary.decode(string), 111)
      })
    })
  })
})
