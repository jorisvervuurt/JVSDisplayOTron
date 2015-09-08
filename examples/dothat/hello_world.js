// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dothat = new JVSDisplayOTron.DOTHAT();

// Set the display contrast to a better-readable value.
dothat.lcd.setContrast(45);

// Write 'Hello World' on the display.
dothat.lcd.write('Hello World');

// To reduce resource usage, kill the JVSDisplayOTron process if no subsequent calls are made.
dothat.kill(false);
