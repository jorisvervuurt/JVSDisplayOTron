// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dot3k = new JVSDisplayOTron.DOT3k();

// For early Display-O-Tron boards with reversed B/G channels, it may be necessary to change the backlight driver to RBG mode.
// dot3k.backlight.useRBGMode();

// Set all backlight zones to a green color.
dot3k.backlight.setToRGB(0, 255, 0);

// After a one-second delay, set each backlight zone independently.
setTimeout(function() {
    dot3k.backlight.setLeftToRGB(255, 0, 0);
    dot3k.backlight.setMiddleToRGB(0, 255, 0);
    dot3k.backlight.setRightToRGB(0, 0, 255);
    
    // To reduce resource usage, kill the JVSDisplayOTron process if no subsequent calls are made.
    dot3k.kill(false);
}, 1000);
