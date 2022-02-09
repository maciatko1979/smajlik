input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # # # # #
        . # # # .
        `)
    basic.pause(2000)
    basic.showString("Hello!")
    soundExpression.happy.playUntilDone()
    music.setVolume(255)
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
	
})
