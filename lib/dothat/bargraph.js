//
//  bargraph.js
//  JVSDisplayOTron
//
//  Created by Joris Vervuurt on 20-08-15.
//  Copyright (c) 2015 Joris Vervuurt Software. All rights reserved.
//

//  The MIT License (MIT)
//
//  Copyright (c) 2015 Joris Vervuurt Software
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.

'use strict';

// Load dependencies.
var DisplayOTronCommand = require('../shared/displayotroncommand.js');

/**
 * Creates a new `BarGraph` object.
 * Note: you should not instantiate this class directly. Instead, use the `barGraph` property of an initialized `DOTHAT` object.
 * @constructor
 * @param {DisplayOTron} displayOTron The `DisplayOTron` instance.
 */
function BarGraph(displayOTron) {
    if (!(this instanceof BarGraph)) {
        return new BarGraph(displayOTron);
    }
    
    this.displayOTron = displayOTron;
}

/**
 * Turns off the bar graph.
 */
BarGraph.prototype.turnOff = function() {
    this.displayOTron.sendCommand(new DisplayOTronCommand('BarGraph', 'turnOff'));
};

/**
 * Sets the bar graph by a percentage.
 * @param {Number} percentage The percentage (should be between 0 and 100).
 */
BarGraph.prototype.setByPercentage = function(percentage) {
    if (!(typeof percentage === 'number') || percentage < 0 || percentage > 100) {
        throw new Error('The specified percentage is invalid (should be between 0 and 100).');
    }
    
    var command = new DisplayOTronCommand('BarGraph', 'setByPercentage');
    command.addParameter('percentage', percentage);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets the minimum and maximum brightness of the bar graph.
 * @param {Number} minimumBrightness The minimum brightness value (should be between 0 and 15).
 * @param {Number} maximumBrightness The maximum brightness value (should be between 0 and 15).
 */
BarGraph.prototype.setBrightness = function(minimumBrightness, maximumBrightness) {
    if (!(typeof minimumBrightness === 'number') || minimumBrightness < 0 || minimumBrightness > 15) {
        throw new Error('The specified minimum brightness value is invalid (should be between 0 and 15).');
    }
    
    if (!(typeof maximumBrightness === 'number') || maximumBrightness < 0 || maximumBrightness > 15) {
        throw new Error('The specified maximum brightness value is invalid (should be between 0 and 15).');
    }
    
    var command = new DisplayOTronCommand('BarGraph', 'setBrightness');
    command.addParameter('minimumBrightness', minimumBrightness);
    command.addParameter('maximumBrightness', maximumBrightness);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets the enabled state of a specific LED.
 * @param {Number} ledIndex The index of the LED (should be between 0 and 5).
 * @param {Boolean} enabledState A value that indicates whether the LED is enabled.
 */
BarGraph.prototype.setEnabledStateOfLed = function(ledIndex, enabledState) {
    if (!(typeof ledIndex === 'number') || ledIndex < 0 || ledIndex > 5) {
        throw new Error('The specified index is invalid (should be between 0 and 5).');
    }
    
    if (!(typeof enabledState === 'boolean') || (enabledState !== true && enabledState !== false)) {
        throw new Error('The specified enabled state is invalid (should be true or false).');
    }
    
    var command = new DisplayOTronCommand('BarGraph', 'setEnabledStateOfLed');
    command.addParameter('ledIndex', ledIndex);
    command.addParameter('enabledState', enabledState);
    
    this.displayOTron.sendCommand(command);
};

// Export the `BarGraph` class.
module.exports = BarGraph;
