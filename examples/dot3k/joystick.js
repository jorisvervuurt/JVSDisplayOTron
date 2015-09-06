// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dot3k = new JVSDisplayOTron.DOT3k();

// Set the display contrast to a better-readable value.
dot3k.lcd.setContrast(45);

/**
 * Clears the display and writes a string on the second row of the display.
 * @param {String} value The string to write.
 */
function writeOnDisplay(value) {
    dot3k.lcd.clear();
    dot3k.lcd.setCursorPosition(0, 1);
    dot3k.lcd.write(value);
}

/**
 * Handles the 'up' event of the joystick component.
 */
dot3k.joystick.on('up', function() {
    writeOnDisplay('Navigate up.');
});

/**
 * Handles the 'down' event of the joystick component.
 */
dot3k.joystick.on('down', function() {
    writeOnDisplay('Navigate down.');
});

/**
 * Handles the 'left' event of the joystick component.
 */
dot3k.joystick.on('left', function() {
    writeOnDisplay('Navigate left.');
});

/**
 * Handles the 'right' event of the joystick component.
 */
dot3k.joystick.on('right', function() {
    writeOnDisplay('Navigate right.');
});

/**
 * Handles the 'button' event of the joystick component.
 */
dot3k.joystick.on('button', function() {
    writeOnDisplay('Button pressed.');
});
