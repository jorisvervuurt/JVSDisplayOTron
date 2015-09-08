// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dot3k = new JVSDisplayOTron.DOT3k();

// Set the display contrast to a better-readable value.
dot3k.lcd.setContrast(45);

// Write 'Hello World' on the display.
dot3k.lcd.write('Hello World');

// To reduce resource usage, kill the JVSDisplayOTron process if no subsequent calls are made.
dot3k.kill(false);
