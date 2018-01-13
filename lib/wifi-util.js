const wifi = require("node-wifi")

wifi.init({
  iface: "wlan0",
})

let wifis = []

function scan() {
  wifi.scan((err, networks) => {
    wifis = networks
  })
}

scan()
setInterval(scan, 30000)

exports.getWifis = function getWifis() {
  return wifis
}

exports.connect = function connect(ssid, password) {
  return new Promise((res, rej) => {
    wifi.connect({ssid, password}, err => {
      if (err) rej(err)
      else res()
    })
  })
}
