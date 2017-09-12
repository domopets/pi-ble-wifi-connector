const execa = require("execa")

let wifis = []

async function scan() {
  const cmd = `sudo iw wlan0 scan | awk -f ${__dirname}/scan.awk`
  const {stdout} = await execa.shell(cmd)
  wifis = stdout
    .split("\n")
    .map(line => {
      const [ssid, freq, signal, type] = line.split(",")
      return {
        ssid,
        freq,
        signal,
        type,
      }
    })
    .filter(({type}) => type === "WPA")
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
