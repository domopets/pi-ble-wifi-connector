const util = require('util')
const {Characteristic} = require('bleno')

class EchoCharacteristic extends Characteristic {
  constructor() {
    super({
      uuid: 'ec0e',
      properties: ['read'],
      value: null,
    })
  }

  onReadRequest(offset, callback) {
    console.log('On Read Request !!!!')

    callback(this.RESULT_SUCCESS, Buffer.from('Youpi!'))
  }
}

module.exports = EchoCharacteristic
