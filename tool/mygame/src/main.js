import kaboom from "kaboom"

kaboom()

loadSprite("kid", "sprites/kid.png")
loadSprite("money", "sprites/money.png")
loadSprite("mom", "sprites/mom.png")

const SPEED = 200

const player = add([
	pos(120, 90),
	sprite("kid"),
	scale(0.4),
	area(0.4),
])

onKeyDown("left", () => {
	player.move(-SPEED, 0)
})

onKeyDown("right", () => { // move to the right when pressing right arrow key 
	player.move(SPEED, 0)
})

onKeyDown("up", () => { // move up when pressing up arrow key
	player.move(0, -SPEED)
})

onKeyDown("down", () => {  // move down when pressing down arrow key 
	player.move(0, SPEED)
})

function spawnCoin() {
    const coin = add([
        pos(rand(width()), rand(height())), // random position
        sprite("money"), // use the money sprite
        scale(0.5), // size it 
		area(0.5),
        "coin" 
    ]);
}


loop(3, spawnCoin);


player.onCollide("coin", (coin) => {
	destroy(coin)  // destory the coin after player go on the 
})
	// Spawn NPC
	function spawnNpc() {

		const mom = add([
			sprite("mom"),
			pos(rand(0, width()), rand(0, height())),
			scale(0.5),
			area(),
		])

		const npcSpeed = 100

		// Follow player
		mom.onUpdate(() => {
			mom.moveTo(player.pos, npcSpeed)
		})
	}

	// Spawn a new mom every 10 seconds
	loop(15, spawnNpc)


init()