// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dot3k = new JVSDisplayOTron.DOT3k();

/**
 * Sets the bar graph by a percentage.
 * @param {Function} callback A function to call when the operation has finished.
 */
function setByPercentage(callback) {
    var percentage = 0;
    
    var setByPercentageInterval = setInterval(function() {
        if (percentage <= 100) {
            dot3k.barGraph.setByPercentage(percentage);
            
            percentage++;
        } else {
            clearInterval(setByPercentageInterval);
            
            if (callback) {
                callback();
            }
        }
    }, 50);
}

/**
 * Sets the brightness of each individual LED.
 * @param {Function} callback A function to call when the operation has finished.
 */
function setBrightnessOfLed(callback) {
    var ledIndex = 8;
    
    var setBrightnessOfLedInterval = setInterval(function() {
        if (ledIndex >= 0) {
            dot3k.barGraph.setBrightnessOfLed(ledIndex, 0);
            
            ledIndex--;
        } else {
            clearInterval(setBrightnessOfLedInterval);
            
            if (callback) {
                callback();
            }
        }
    }, 500);
}

// Start the bar graph example.
setByPercentage(function() {
    setTimeout(function() {
        setBrightnessOfLed(function() {
            // To reduce resource usage, kill the JVSDisplayOTron process if no subsequent calls are made.
            dot3k.kill(true);
        });
    }, 500);
});
