// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dot3k = new JVSDisplayOTron.DOT3k();

// Set the display contrast to a better-readable value.
dot3k.lcd.setContrast(45);

// Create an animated Space Invader character.
var spaceInvaderAnimatedCharacter = dot3k.lcd.createAnimatedCharacter({
    memoryPosition: 0,
    frames: [
        [14, 31, 21, 31, 9, 18, 9, 18],
        [14, 31, 21, 31, 18, 9, 18, 9]
    ],
    frameRate: 2,
    repeatCount: 4 // Remove or set to 0 for an infinite animation.
});

/**
 * Handles the 'startAnimating' event of the Space Invader character.
 */
spaceInvaderAnimatedCharacter.on('startAnimating', function() {
    console.log('Space Invader character has started animating.');
});

/**
 * Handles the 'stopAnimating' event of the Space Invader character.
 */
spaceInvaderAnimatedCharacter.on('stopAnimating', function() {
    console.log('Space Invader character has stopped animating.');
});

// Create an animated Pac-Man character.
var pacManAnimatedCharacter = dot3k.lcd.createAnimatedCharacter({
    memoryPosition: 1,
    frames: [
        [0x0e, 0x1f, 0x1d, 0x1f, 0x18, 0x1f, 0x1f, 0x0e],
        [0x0e, 0x1d, 0x1e, 0x1c, 0x18, 0x1c, 0x1e, 0x0f]
	],
	frameRate: 2
});

// Create an animated pirate character.
var pirateAnimatedCharacter = dot3k.lcd.createAnimatedCharacter({
    memoryPosition: 2,
    frames: [
        [0x00, 0x1f, 0x0b, 0x03, 0x00, 0x04, 0x11, 0x1f],
        [0x00, 0x1f, 0x16, 0x06, 0x00, 0x08, 0x03, 0x1e],
        [0x00, 0x1f, 0x0b, 0x03, 0x00, 0x04, 0x11, 0x1f],
        [0x00, 0x1f, 0x05, 0x01, 0x00, 0x02, 0x08, 0x07]
    ],
    frameRate: 2
});

// Write the animated Space Invader character on the first row of the display.
dot3k.lcd.setCursorPosition(0, 0);
dot3k.lcd.writeAnimatedCharacter(spaceInvaderAnimatedCharacter);
dot3k.lcd.write(' Space Invader');

// Write the animated Pac-Man character on the second row of the display.
dot3k.lcd.setCursorPosition(0, 1);
dot3k.lcd.writeAnimatedCharacter(pacManAnimatedCharacter);
dot3k.lcd.write(' Pac-Man');

// Write the animated pirate character on the third row of the display.
dot3k.lcd.setCursorPosition(0, 2);
dot3k.lcd.writeAnimatedCharacter(pirateAnimatedCharacter);
dot3k.lcd.write(' Pirate');
