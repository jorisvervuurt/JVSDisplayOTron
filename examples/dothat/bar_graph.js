// Load dependencies.
var JVSDisplayOTron = require('../../index.js');

// Initialize the Display-O-Tron.
var dothat = new JVSDisplayOTron.DOTHAT();

/**
 * Sets the bar graph by a percentage.
 * @param {Function} callback A function to call when the operation has finished.
 */
function setByPercentage(callback) {
    var percentage = 0;
    
    var setByPercentageInterval = setInterval(function() {
        if (percentage <= 100) {
            dothat.barGraph.setByPercentage(percentage);
            
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
 * Sets the enabled state of each individual LED in the bar graph.
 * @param {Function} callback A function to call when the operation has finished.
 */
function setEnabledStateOfLed(callback) {
    var index = 0;
    
    var setEnabledStateOfLedInterval = setInterval(function() {
        if (index <= 5) {
            dothat.barGraph.setEnabledStateOfLed(index, false);
            
            index++;
        } else {
            clearInterval(setEnabledStateOfLedInterval);
            
            if (callback) {
                callback();
            }
        }
    }, 500);
}

// Start the bar graph example.
setByPercentage(function() {
    setTimeout(function() {
        setEnabledStateOfLed(function() {
            // To reduce resource usage, kill the JVSDisplayOTron process if no subsequent calls are made.
            dothat.kill(true);
        });
    }, 500);
});
