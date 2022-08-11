let strip: neopixel.Strip = null
function ledenable_false () {
	
}
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        strip.clear()
    }
})
