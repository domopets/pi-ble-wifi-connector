const {Characteristic} = require('bleno')
const {connect} = require('../wifi-util')

class PasswordCharacteristic extends Characteristic {
  constructor(ssidCharacteristic) {
    super({
      uuid: 'BB02',
      properties: ['write'],
      value: null
    })

    this._ssidCharacteristic = ssidCharacteristic
  }

  onWriteRequest(data, offset, withoutResponse, callback) {
    const password = data.toString('utf-8')
    console.log(offset)
    console.log('Writing password: ', password)
    connect(this._ssidCharacteristic.val, password).then(() => {
      callback(this.RESULT_SUCCESS)
    }).catch(err => {
      console.log(err)
      callback(this.RESULT_UNLIKELY_ERROR)
    })
  }
}

module.exports = PasswordCharacteristic
