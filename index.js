const bleno = require('bleno')
const EchoCharacteristic = require('./lib/EchoCharacteristic')
const {PrimaryService} = bleno

bleno.on('stateChange', state => {
  console.log('on -> stateChange: ' + state)

  if (state == 'poweredOn') {
    bleno.startAdvertising('pi echo', ['ec00'])
  } else {
    bleno.stopAdvertising()
  }
})

bleno.on('advertisingStart', err => {
  console.log('on -> advertisingStart: ' + (err ? 'error ' + err : 'success'))

  if (err)
    return

  bleno.setServices([
    new PrimaryService({
      uuid: 'ec00',
      characteristics: [
        new EchoCharacteristic()
      ]
    })
  ])
})
