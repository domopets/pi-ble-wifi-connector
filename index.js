const bleno = require("bleno")
const WifiReaderService = require("./lib/WifiReaderService")
const WifiConnectorService = require("./lib/WifiConnectorService")

bleno.on("stateChange", state => {
  console.log("on -> stateChange: " + state)

  if (state == "poweredOn") {
    bleno.startAdvertising(require("os").hostname(), [WifiReaderService.uuid])
  } else {
    bleno.stopAdvertising()
  }
})

bleno.on("advertisingStart", err => {
  console.log("on -> advertisingStart: " + (err ? "error " + err : "success"))

  if (err) return

  bleno.setServices([new WifiReaderService(), new WifiConnectorService()])
})
