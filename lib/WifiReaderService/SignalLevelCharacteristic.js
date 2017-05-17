const {Characteristic} = require('bleno')
const {getWifis} = require('../wifi-util')

class SignalLevelCharacteristic extends Characteristic {
  constructor(indexCharacteristic) {
    super({
      uuid: 'AA03',
      properties: ['read'],
      value: null
    })

    this._index = indexCharacteristic
  }

  onReadRequest(offset, callback) {
    const wifis = getWifis()
    const index = this._index.val

    console.log(`Getting signal level at index  ${index}`)

    if (index < 0 || index >= wifis.length) {
      console.log('Error: invalid index')
      return callback(this.RESULT_UNLIKELY_ERROR)
    }

    callback(
      this.RESULT_SUCCESS,
      Buffer.from(wifis[index].signal_level, 'utf-8')
    )
  }
}

module.exports = SignalLevelCharacteristic
