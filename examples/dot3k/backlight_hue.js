// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dot3k = new JVSDisplayOTron.DOT3k();

// For early Display-O-Tron boards with reversed B/G channels, it may be necessary to change the backlight driver to RBG mode.
// dot3k.backlight.useRBGMode();

// Set all backlight zones to a hue value of 0.5.
dot3k.backlight.setToHue(0.6);

// After a one-second delay, set each backlight zone independently.
setTimeout(function() {
    dot3k.backlight.setLeftToHue(0.9);
    dot3k.backlight.setMiddleToHue(0.3);
    dot3k.backlight.setRightToHue(0.6);
    
    // To reduce resource usage, kill the JVSDisplayOTron process if no subsequent calls are made.
    dot3k.kill(false);
}, 1000);
