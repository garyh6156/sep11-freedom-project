# Entry 5
##### 4/17/26

### Content
During the past few days, I finish the basic part of my [MVP](https://github.com/garyh6156/sep11-freedom-project/blob/main/tool/mygame/src/main.js), there a little bean that you can control to move around to collect coins, and then I change the bean to something else and I added a npc that will follow the player.
### Here's the code
``` js
var speed = 100;
function spawnNpc(){
	const mom = add([
		pos(rand(width()),rand(height())),
		sprite("mom"),
		scale(0.3),
		area(),
	])
	
 }
 function movment(){
	mom.action(() => {
		mom.moveTowards(player.pos, mom.speed);
 }
 )}
loop(10, spawnNpc);
```
This is my code that it will summon a npc every 10 secs that will follow the player, and also 
there are still a lot of thing I need to fix, first is that the npc is not moving at all, and it doesn't spawn every 10 secs 

### Engineering Design Process
I am on stage 3 brainstorm possible solutions because I am brainstorming solutions to fix my code, and brainstorm more idea to add in my game for example, that every 10 secs there a chance to spawn out different characters
### Skills
The skills that I use and learn is that debugging and how to google, first debugging, at first my code that use to spawn the npc is completely not working it keep saying mom.action was not a function so I added the function of top of that code which was this code
``` js
function movment(){
	mom.action(() => {
		mom.moveTowards(player.pos, mom.speed);
 }
 )}
``` 

* But there was still a lot I need to debug 

And then is how to google that when I try to remove the background of my image, I doesn't know how to do it, so I google up that what some website that you could use to remove background of an image, then I find this [website](https://www.photopea.com/) in this website you can drag/upload the image you need on there and use the magic wand 







[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
