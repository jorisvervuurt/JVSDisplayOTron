// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dothat = new JVSDisplayOTron.DOTHAT();

// Set the display contrast to a better-readable value.
dothat.lcd.setContrast(45);

/**
 * Handles the 'up' event.
 */
dothat.touch.on('up', function() {
    dothat.lcd.clear();
    dothat.lcd.setCursorPosition(0, 1);
    dothat.lcd.write('Navigate up.');
});

/**
 * Handles the 'down' event.
 */
dothat.touch.on('down', function() {
    dothat.lcd.clear();
    dothat.lcd.setCursorPosition(0, 1);
    dothat.lcd.write('Navigate down.');
});

/**
 * Handles the 'left' event.
 */
dothat.touch.on('left', function() {
    dothat.lcd.clear();
    dothat.lcd.setCursorPosition(0, 1);
    dothat.lcd.write('Navigate left.');
});

/**
 * Handles the 'right' event.
 */
dothat.touch.on('right', function() {
    dothat.lcd.clear();
    dothat.lcd.setCursorPosition(0, 1);
    dothat.lcd.write('Navigate right.');
});

/**
 * Handles the 'button' event.
 */
dothat.touch.on('button', function() {
    dothat.lcd.clear();
    dothat.lcd.setCursorPosition(0, 1);
    dothat.lcd.write('Button touched.');
});

/**
 * Handles the 'cancel' event.
 */
dothat.touch.on('cancel', function() {
    dothat.lcd.clear();
    dothat.lcd.setCursorPosition(0, 1);
    dothat.lcd.write('Cancel touched.');
});
