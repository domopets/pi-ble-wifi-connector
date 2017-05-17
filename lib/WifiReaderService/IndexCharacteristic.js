const {Characteristic} = require('bleno')

class IndexCharacteristic extends Characteristic {
  constructor() {
    super({
      uuid: 'AA01',
      properties: ['read', 'write'],
      value: null
    })

    this._value = Buffer.allocUnsafe(1)
    this._value.writeUInt8(0)
  }

  get val() {
    return this._value.readUInt8(0)
  }

  onReadRequest(offset, callback) {
    callback(this.RESULT_SUCCESS, this._value)
  }

  onWriteRequest(data, offset, withoutResponse, callback) {
    this._value = data
    callback(this.RESULT_SUCCESS)
  }
}

module.exports = IndexCharacteristic
