input.onGesture(Gesture.TiltLeft, function () {
    if (gestartet == 1) {
        zaehler += -1
        if (zaehler < 0) {
            zaehler = 25
        }
    }
})
input.onButtonPressed(Button.B, function () {
    gestartet = 0
    basic.showNumber(zaehler)
    basic.pause(2200)
    basic.showIcon(IconNames.Heart)
    basic.pause(2200)
    ergebnis = 0
    while (zaehler > 0) {
        ergebnis = ergebnis + zaehler % 10
        zaehler = (zaehler - zaehler % 10) / 10
    }
    basic.showNumber(ergebnis)
})
input.onButtonPressed(Button.A, function () {
    gestartet = 1
    zaehler = 25
    basic.showIcon(IconNames.Heart)
})
let ergebnis = 0
let zaehler = 0
let gestartet = 0
basic.showNumber(0)
