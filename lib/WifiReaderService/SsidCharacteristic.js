const {Characteristic} = require('bleno')
const {getWifis} = require('../wifi-util')

class SsidCharacteristic extends Characteristic {
  constructor(indexCharacteristic) {
    super({
      uuid: 'AA02',
      properties: ['read'],
      value: null
    })

    this._index = indexCharacteristic
  }

  onReadRequest(offset, callback) {
    const wifis = getWifis()
    const index = this._index.val

    console.log(`Getting ssid at index  ${index}`)

    if (index < 0 || index >= wifis.length) {
      console.log('Error: invalid index')
      return callback(this.RESULT_UNLIKELY_ERROR)
    }

    callback(
      this.RESULT_SUCCESS,
      Buffer.from(wifis[index].ssid, 'utf-8')
    )
  }
}

module.exports = SsidCharacteristic
