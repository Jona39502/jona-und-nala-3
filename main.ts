input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    himmelsrichtung = input.compassHeading()
    basic.clearScreen()
    basic.showNumber(himmelsrichtung)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (modus == 1) {
        modus = 2
    } else {
        modus = 1
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (himmelsrichtung >= 45 && himmelsrichtung <= 315) {
        if (input.compassHeading() >= himmelsrichtung - 45 && input.compassHeading() <= himmelsrichtung + 45) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
    if (himmelsrichtung <= 44) {
        if (input.compassHeading() >= 0 && input.compassHeading() <= 44 || input.compassHeading() <= himmelsrichtung + 45 || input.compassHeading() >= 315 + himmelsrichtung) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
    if (himmelsrichtung >= 316) {
        if (input.compassHeading() >= 316 && input.compassHeading() <= 360 || input.compassHeading() >= himmelsrichtung - 45 || input.compassHeading() <= himmelsrichtung - 315) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
})
let himmelsrichtung = 0
let modus = 0
modus = 1
himmelsrichtung = 0
basic.forever(function () {
    if (modus == 1) {
        if (input.compassHeading() >= 0 && input.compassHeading() <= 45 || input.compassHeading() >= 316 && input.compassHeading() <= 360) {
            basic.showLeds(`
                # . . . #
                # # . . #
                # . # . #
                # . . # #
                # . . . #
                `)
        }
        if (input.compassHeading() >= 46 && input.compassHeading() <= 135) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        if (input.compassHeading() >= 136 && input.compassHeading() <= 225) {
            basic.showLeds(`
                # # # # #
                # . . . .
                # # # # #
                . . . . #
                # # # # #
                `)
        }
        if (input.compassHeading() >= 226 && input.compassHeading() <= 315) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # . # . #
                # # . # #
                # . . . #
                `)
        }
    }
    if (modus == 2) {
        if (input.compassHeading() >= 0 && input.compassHeading() <= 35 || input.compassHeading() >= 326 && input.compassHeading() <= 360) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
        }
        if (input.compassHeading() >= 56 && input.compassHeading() <= 125) {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
        }
        if (input.compassHeading() >= 146 && input.compassHeading() <= 215) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . # # # .
                . . # . .
                `)
        }
        if (input.compassHeading() >= 236 && input.compassHeading() <= 305) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
        }
        if (input.compassHeading() >= 36 && input.compassHeading() <= 55) {
            basic.showLeds(`
                . # # # #
                . . # # #
                . . # # #
                . # . . #
                # . . . .
                `)
        }
        if (input.compassHeading() >= 126 && input.compassHeading() <= 145) {
            basic.showLeds(`
                # . . . .
                . # . . #
                . . # # #
                . . # # #
                . # # # #
                `)
        }
        if (input.compassHeading() >= 216 && input.compassHeading() <= 235) {
            basic.showLeds(`
                . . . . #
                # . . # .
                # # # . .
                # # # . .
                # # # # .
                `)
        }
        if (input.compassHeading() >= 306 && input.compassHeading() <= 325) {
            basic.showLeds(`
                # # # # .
                # # # . .
                # # # . .
                # . . # .
                . . . . #
                `)
        }
    }
    if (input.compassHeading() >= 0 && input.compassHeading() <= 10 || input.compassHeading() >= 350 && input.compassHeading() <= 360) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
})
