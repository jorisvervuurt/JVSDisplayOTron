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
 * Note: you should not instantiate this class directly. Instead, use the `barGraph` property of an initialized `DOT3k` object.
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
 * Sets the brightness of a specific LED.
 * @param {Number} ledIndex The index of the LED (should be between 0 and 8).
 * @param {Number} brightness The brightness value (should be between 0 and 255).
 */
BarGraph.prototype.setBrightnessOfLed = function(ledIndex, brightness) {
    if (!(typeof ledIndex === 'number') || ledIndex < 0 || ledIndex > 8) {
        throw new Error('The specified LED index is invalid (should be between 0 and 8).');
    }
    
    if (!(typeof brightness === 'number') || brightness < 0 || brightness > 255) {
        throw new Error('The specified brightness value is invalid (should be between 0 and 255).');
    }
    
    var command = new DisplayOTronCommand('BarGraph', 'setBrightnessOfLed');
    command.addParameter('ledIndex', ledIndex);
    command.addParameter('brightness', brightness);
    
    this.displayOTron.sendCommand(command);
};

// Export the `BarGraph` class.
module.exports = BarGraph;
