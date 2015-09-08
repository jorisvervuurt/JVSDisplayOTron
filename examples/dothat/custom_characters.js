// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dothat = new JVSDisplayOTron.DOTHAT();

// Set the display contrast to a better-readable value.
dothat.lcd.setContrast(45);

// Create a Space Invader character.
var spaceInvaderCharacter = dothat.lcd.createCharacter({
    memoryPosition: 0, 
    map: [14, 31, 21, 31, 9, 18, 9, 18]
});

// Create a Pac-Man character.
var pacManCharacter = dothat.lcd.createCharacter({
    memoryPosition: 1,
    map: [0x0e, 0x1f, 0x1d, 0x1f, 0x18, 0x1f, 0x1f, 0x0e]
});

// Create a pirate character.
var pirateCharacter = dothat.lcd.createCharacter({
    memoryPosition: 2,
    map: [0x00, 0x1f, 0x0b, 0x03, 0x00, 0x04, 0x11, 0x1f]
});

// Write the Space Invader character on the first row of the display.
dothat.lcd.setCursorPosition(0, 0);
dothat.lcd.writeCharacter(spaceInvaderCharacter);
dothat.lcd.write(' Space Invader');

// Write the Pac-Man character on the second row of the display.
dothat.lcd.setCursorPosition(0, 1);
dothat.lcd.writeCharacter(pacManCharacter);
dothat.lcd.write(' Pac-Man');

// Write the pirate character on the third row of the display.
dothat.lcd.setCursorPosition(0, 2);
dothat.lcd.writeCharacter(pirateCharacter);
dothat.lcd.write(' Pirate');

// To reduce resource usage, kill the JVSDisplayOTron process if no subsequent calls are made.
dothat.kill(false);
