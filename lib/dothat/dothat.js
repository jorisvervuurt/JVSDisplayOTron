//
//  dothat.js
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
var DisplayOTron = require('../shared/displayotron.js'),
    LCD = require('../shared/lcd.js'),
    Backlight = require('./backlight.js'),
    BarGraph = require('./bargraph.js'),
    Touch = require('./touch.js');

/**
 * Creates a new `DOTHAT` object.
 * @constructor
 */
function DOTHAT() {
    if (!(this instanceof DOTHAT)) {
        return new DOTHAT();
    }
    
    this.displayOTron = new DisplayOTron('HAT');
    this.lcd = new LCD(this.displayOTron);
    this.backlight = new Backlight(this.displayOTron);
    this.barGraph = new BarGraph(this.displayOTron);
    this.touch = new Touch(this.displayOTron);
}

/**
 * Resets the Display-O-Tron.
 */
DOTHAT.prototype.reset = function() {
    this.displayOTron.reset();
};

/**
 * Kills the Python process used by JVSDisplayOTron.
 * @param {Boolean} [performReset=false] A value that indicates whether a reset should be performed prior to killing the process. Optional (false by default).
 */
DOTHAT.prototype.kill = function(performReset) {
    this.displayOTron.kill(performReset);
};

// Export the `DOTHAT` class.
module.exports = DOTHAT;
