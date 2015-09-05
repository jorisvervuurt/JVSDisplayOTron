// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dothat = new JVSDisplayOTron.DOTHAT();

// Set all backlight LEDs to a hue value of 0.5.
dothat.backlight.setToHue(0.6);

// After a one-second delay, set the backlight LEDs independently.
setTimeout(function() {
    dothat.backlight.setLeftToHue(0.9);
    dothat.backlight.setMiddleToHue(0.3);
    dothat.backlight.setRightToHue(0.6);
    
    // To reduce resource usage, kill the JVSDisplayOTron process if no subsequent calls are made.
    dothat.kill(false);
}, 1000);
