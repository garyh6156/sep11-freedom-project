import kaboom from "kaboom"

kaboom()

loadSprite("bean", "sprites/bean.png")
loadSprite("money", "sprites/money.png")

const SPEED = 200

const player = add([
	pos(120, 90),
	sprite("bean"),
	area(),
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

function spawnCoin() {
    const coin = add([
        pos(rand(width()), rand(height())), // Random position
        sprite("money"), // Use the money sprite
        scale(0.5), // size it 
		area(),
        "coin" 
    ]);
}
loop(3, spawnCoin);

player.onCollide("coin", (coin) => {
	destroy(coin)
})






