// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dothat = new JVSDisplayOTron.DOTHAT();

// Set all backlight LEDs to a green color.
dothat.backlight.setToRGB(0, 255, 0);

// After a one-second delay, set the backlight LED zones independently.
setTimeout(function() {
    dothat.backlight.setZoneToRGB(0, 255, 0, 0);
    dothat.backlight.setZoneToRGB(1, 0, 255, 0);
    dothat.backlight.setZoneToRGB(2, 0, 0, 255);
    dothat.backlight.setZoneToRGB(3, 255, 0, 0);
    dothat.backlight.setZoneToRGB(4, 0, 255, 0);
    dothat.backlight.setZoneToRGB(5, 0, 0, 255);
    
    // To reduce resource usage, kill the JVSDisplayOTron process if no subsequent calls are made.
    dothat.kill(false);
}, 1000);
