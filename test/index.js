const assert = require('assert')

describe('Charcoder', function () {
  const Charcoder = require('./../index')

  it('should be a function (class)', function () {
    assert.strictEqual(typeof Charcoder, 'function')
  })

  describe('instance', function () {

    it('should convert to hex by default', function () {
      const hex = new Charcoder()
      assert.strictEqual(parseInt('0x' + hex.encode(111)), 111)
    })

    it('should be able to convert into b62', function () {
      const b62 = new Charcoder(Charcoder.B62)
      assert.strictEqual(b62.decode(b62.encode(111)), 111)
    })

    it('should be able to convert into binary', function () {
      const binary = new Charcoder('01')
      assert.strictEqual(binary.encode(2), '10')
    })
  })
})
