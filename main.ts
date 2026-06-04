input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Asleep)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Asleep)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Sad)
})
basic.showIcon(IconNames.Asleep)
