const {Characteristic} = require('bleno')
const {getWifis} = require('../wifi-util')

class SsidCharacteristic extends Characteristic {
  constructor() {
    super({
      uuid: 'BB01',
      properties: ['write'],
      value: null
    })

    this._value = null
  }

  get val() {
    return this._value
  }

  onWriteRequest(data, offset, withoutResponse, callback) {
    const ssid = data.toString('utf-8')
    const wifis = getWifis()

    console.log('SSID write: ', ssid)

    if (!wifis.find(w => w.ssid === ssid)) {
      console.log(`Couldn't find ssid => ${ssid}`)
      return callback(this.RESULT_UNLIKELY_ERROR)
    }

    this._value = ssid
    callback(this.RESULT_SUCCESS)
  }
}

module.exports = SsidCharacteristic
