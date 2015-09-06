// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dothat = new JVSDisplayOTron.DOTHAT();

// Set the display contrast to a better-readable value.
dothat.lcd.setContrast(45);

/**
 * Clears the display and writes a string on the second row of the display.
 * @param {String} value The string to write.
 */
function writeOnDisplay(value) {
    dothat.lcd.clear();
    dothat.lcd.setCursorPosition(0, 1);
    dothat.lcd.write(value);
}

/**
 * Handles the 'up' event of the touch component.
 */
dothat.touch.on('up', function() {
    writeOnDisplay('Navigate up.');
});

/**
 * Handles the 'down' event of the touch component.
 */
dothat.touch.on('down', function() {
    writeOnDisplay('Navigate down.');
});

/**
 * Handles the 'left' event of the touch component.
 */
dothat.touch.on('left', function() {
    writeOnDisplay('Navigate left.');
});

/**
 * Handles the 'right' event of the touch component.
 */
dothat.touch.on('right', function() {
    writeOnDisplay('Navigate right.');
});

/**
 * Handles the 'button' event of the touch component.
 */
dothat.touch.on('button', function() {
    writeOnDisplay('Button touched.');
});

/**
 * Handles the 'cancel' event of the touch component.
 */
dothat.touch.on('cancel', function() {
    writeOnDisplay('Cancel touched.');
});
