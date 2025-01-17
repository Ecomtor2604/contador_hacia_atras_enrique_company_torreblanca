input.onButtonPressed(Button.A, function () {
    Contador = 10
})
let Contador = 0
Contador = 10
basic.forever(function () {
    basic.showNumber(Contador)
    Contador += -1
    if (Contador < 1) {
        Contador = 10
    }
    basic.pause(1000)
})
