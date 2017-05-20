const {PrimaryService} = require('bleno')

const SsidCharacteristic = require('./SsidCharacteristic')
const PasswordCharacteristic = require('./PasswordCharacteristic')

const uuid = 'BB00'

class WifiConnectorService extends PrimaryService {
  constructor() {
    const ssidCharacteristic = new SsidCharacteristic()
    super({
      uuid,
      characteristics: [
        ssidCharacteristic,
        new PasswordCharacteristic(ssidCharacteristic)
      ]
    })
  }
}

module.exports = WifiConnectorService
