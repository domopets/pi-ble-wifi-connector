const wifi = require('node-wifi')

wifi.init()

let wifis = []

function scan() {
  wifi.scan((err, networks) => {
    wifis = networks
  })
}

scan()
setInterval(scan, 5000)


exports.getWifis = function getWifis() {
  return wifis
}
