const bleno = require('bleno')
const WifiReaderService = require('./lib/WifiReaderService')

bleno.on('stateChange', state => {
  console.log('on -> stateChange: ' + state)

  if (state == 'poweredOn') {
    bleno.startAdvertising('raspberry', [WifiReaderService.uuid])
  } else {
    bleno.stopAdvertising()
  }
})

bleno.on('advertisingStart', err => {
  console.log('on -> advertisingStart: ' + (err ? 'error ' + err : 'success'))

  if (err)
    return

  bleno.setServices([new WifiReaderService()])
})
