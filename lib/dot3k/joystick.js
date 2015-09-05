//
//  joystick.js
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
var util = require('util'),
    events = require('events');

/**
 * Creates a new `Joystick` object.
 * Note: you should not instantiate this class directly. Instead, use the `joystick` property of an initialized `DOT3k` object.
 * @constructor
 * @param {DisplayOTron} displayOTron The `DisplayOTron` instance.
 */
function Joystick(displayOTron) {
    if (!(this instanceof Joystick)) {
        return new Joystick(displayOTron);
    }
    
    var self = this;
    
    displayOTron.on('event', function(event) {
        if (event.component === 'Joystick') {
            self.emit(event.event);
        }
    });
    
    events.EventEmitter.call(this);
}

// Inherit the prototype of `EventEmitter`.
util.inherits(Joystick, events.EventEmitter);

// Export the `Joystick` class.
module.exports = Joystick;
