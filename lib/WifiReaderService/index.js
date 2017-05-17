const {PrimaryService} = require('bleno')

const CountCharacteristic = require('./CountCharacteristic')
const IndexCharacteristic = require('./IndexCharacteristic')
const SignalLevelCharacteristic = require('./SignalLevelCharacteristic')
const SsidCharacteristic = require('./SsidCharacteristic')

const uuid = 'AA00'

class WifiReaderService extends PrimaryService {
  constructor() {
    const indexCharacteristic = new IndexCharacteristic()
    super({
      uuid,
      characteristics: [
        indexCharacteristic,
        new CountCharacteristic(),
        new SignalLevelCharacteristic(indexCharacteristic),
        new SsidCharacteristic(indexCharacteristic),
      ]
    })
  }

  static get uuid() {
    return uuid
  }
}

module.exports = WifiReaderService
