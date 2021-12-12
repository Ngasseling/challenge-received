radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("PUNTEN ZIJN TOEGEVOEGD!")
    serial.writeLine("" + (receivedNumber))
})
radio.setGroup(125)
