import kaboom from "kaboom"

kaboom()

loadSprite("bean", "sprites/bean.png")
loadSprite("coin", "sprites/coin.png")

const SPEED = 200

const player = add([
	pos(120, 90),
	sprite("bean"),
])

onKeyDown("left", () => {
	player.move(-SPEED, 0)
})

onKeyDown("right", () => {
	player.move(SPEED, 0)
})

onKeyDown("up", () => {
	player.move(0, -SPEED)
})

onKeyDown("down", () => {
	player.move(0, SPEED)
})

// add([
// 	pos(120,90),
// 	sprite("coin"),
// 	area(20),
// ])

// add([
// 	pos(150,90),
// 	sprite("coin"),
// 	area(20),
// ])
// add([
// 	pos(100,90),
// 	sprite("coin"),
// 	area(20),
// ])




onClick(() => addKaboom(mousePos()))