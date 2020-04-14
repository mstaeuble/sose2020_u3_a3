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
})
input.onButtonPressed(Button.A, function () {
    gestartet = 1
    zaehler = 25
    basic.showIcon(IconNames.Heart)
})
let zaehler = 0
let gestartet = 0
basic.showNumber(0)
