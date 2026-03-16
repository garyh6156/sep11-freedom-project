import kaboom from "kaboom"

const k = kaboom()

k.loadSprite("bean", "sprites/bean.png")
k.loadSprite("coin", "sprites/coin.png")
k.add([
	k.pos(120, 90),
	k.sprite("bean"),
])
k.add([
	k.pos(150,90),
	k.sprite("coin"),
])





k.onClick(() => k.addKaboom(k.mousePos()))