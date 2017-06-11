# Rheingard Runes
A mess-around HTML5 game made in pure JavaScript/HTML5/CSS on Google Chrome 43.
Top-down dungeon-crawling RPG.

## Overview of the Code Base
The game scripts are split into several files:
 * `rAF.js`  : a polyfill for the requestAnimationFrame function.
 * `keys.js` : defines key states and event handlers for them.
 * `image-loader.js` : preloads images contained in a single function called with `new`.
 * `canvas.js` : references the canvas and any initial width/height settings.
 * `box.js`  : a generic box for displaying game objects and tiles.
 * `main.js` : the main game code and data initializations (which will later be moved to their own file).

Improvements can be made to the code now, such as housing related game objects in arrays, but I'm holding off since the project is in such a simple early state. First priority is getting things working.

## Current Plans

 * Make rectangular map with multiple traversable rooms. Character meant to hit edges of map.
 * Put in map.
 * Add sprite sheet animation object.


##Synopsis:

Stone monoliths jut out of the earth, glowing with indecipherable, arcane runes. Their presence has been so ubiquitous and timeless that few men of modern days paid them heed. They were part of the landscape, with as much air of mystery as sparce rumors of their unknown origins lent.

News begins to spread of wandering men being consumed by tendrils of stone. Few survived, and those that did told of huge expanses of winding labyrinths underneath the earth filled with horrid creatures who thirst for blood.

The work of many brave heroes served to cleanse many of these meandering pits, preserving many lives throughout the land, until their work ceased being so simple. Mighty quakes shook the world, and the stones began emitting intense energy. Delving into this strange arcanum imbibed a glance into the world, into every stone in its multitudes, revealing an unknown presence so vast and with a reach so expansive it plunged one into madness.

With enough of the creatures slain, the agitated beast awoke. A gargantuan of stone rose from the earth that put mountains to shame. As its impenetrable armor, it donned the glowing stones, ripping them from their ancient, untouched precipices, scarring the hills of the earth and destroying centuries of civilization.

Our heroes, while valiant in the past, would have a great test of a mettle no man before has held. Will they best this evil, and survive to redeem the human race from destruction?



