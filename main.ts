let x = 0
let pause2 = 200
for (let index = 0; index <= 2; index++) {
    for (let index2 = 0; index2 < 5; index2++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            music.playTone(659, music.beat(BeatFraction.Whole))
            basic.pause(pause2)
            basic.clearScreen()
        }
        x += 1
    }
}
basic.showIcon(IconNames.Yes)
basic.clearScreen()
x = 0
pause2 += -80
