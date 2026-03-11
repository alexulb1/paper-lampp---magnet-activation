function setLed () {
    if (color == 0) {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000, b)
    } else if (color == 1) {
        basic.setLedColors(0x00ffff, 0x00ffff, 0x00ffff, b)
    } else if (color == 2) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00, b)
    } else {
        basic.setLedColors(0xffff00, 0xffff00, 0xffff00, b)
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    mag = Math.abs(input.magneticForce(Dimension.X))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    color += 1
    if (color == 4) {
        color = 0
    }
})
let sense = 0
let color = 0
let b = 0
let mag = 0
mag = Math.abs(input.magneticForce(Dimension.X))
b = 100
color = 0
basic.forever(function () {
    sense = Math.abs(Math.abs(input.magneticForce(Dimension.X)) - mag)
    serial.writeValue("x", sense)
    if (sense > 5) {
        b += 4
        b = Math.constrain(b, 0, 100)
        setLed()
    } else {
        b += -2
        b = Math.constrain(b, 0, 100)
        setLed()
    }
})
