console.log("URL (location)")
console.log(location)
console.log(location.origin) //htpp/127.0.0.1
console.log(location.protocol) //http
console.log(location.host) // 127.0.0.1:5500
console.log(location.hostname) //127.0.0,1
console.log(location.port) //5500
console.log(location.href) // https//127.0.0.01:5500/dom.html
console.log(location.hash) //#example
console.log(location.search) //#name = jon ge = 4
console.log(location.pathname) //dom.html

/*
console.log("History")
console.log(history)
console.log(history.length)
history.back(3)  //-3
history.forward(3) // + 3
history.go(3) // +1 or -1, +2 or -2
history.go(0) 
history.go(-1)
*/

console.log("Navigator")
console.log(navigator) //bluetooh, copy paste, geo, language, so, userAgent
console.log(navigator.connection) //4g, 
console.log(navigator.geolocation) 
console.log(navigator.mediaDevices) //devices, cameras, microphones
console.log(navigator.mimeTypes) //formats accepted by the broswer
console.log(navigator.onLine) // Did the user lose the connection?
console.log(navigator.serviceWorker) //progressive web apps webite -> native application
console.log(navigator.storage)
console.log(navigator.usb)
console.log(navigator.userAgent) // browsers information

