input.onButtonPressed(Button.A, function () {
	
})
basic.showIcon(IconNames.Heart)
music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        # . . . #
        . . # . .
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        # . # . #
        # # # # #
        `)
})
