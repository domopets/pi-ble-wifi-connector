const {Characteristic} = require('bleno')
const {getWifis} = require('../wifi-util')

class CountCharacteristic extends Characteristic {
  constructor() {
    super({
      uuid: 'AA04',
      properties: ['read'],
      value: null
    })
  }

  onReadRequest(offset, callback) {
    const wifis = getWifis()
    const buf = Buffer.allocUnsafe(1)
    buf.writeUInt8(wifis.length)

    callback(this.RESULT_SUCCESS, buf)
  }
}

module.exports = CountCharacteristic
