let strip: neopixel.Strip = null
let strip1: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip3: neopixel.Strip = null
function ledenable_false () {
	
}
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
    strip1 = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
    strip2 = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
    strip3 = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB)
    if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        strip.clear()
    }
    if (pins.digitalReadPin(DigitalPin.P7) == 1) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (pins.digitalReadPin(DigitalPin.P7) == 0) {
        strip1.clear()
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        strip2.clear()
    }
    if (pins.digitalReadPin(DigitalPin.P10) == 1) {
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (pins.digitalReadPin(DigitalPin.P10) == 0) {
        strip3.clear()
    }
})
