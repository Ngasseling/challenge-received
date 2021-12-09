radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(100)
    basic.showString("PUNTEN")
    serial.writeLine("" + (receivedNumber))
})
radio.setGroup(125)
