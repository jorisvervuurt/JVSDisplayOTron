//
//  backlight.js
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
 * Creates a new `Backlight` object.
 * Note: you should not instantiate this class directly. Instead, use the `backlight` property of an initialized `DOTHAT` object.
 * @constructor
 * @param {DisplayOTron} displayOTron The `DisplayOTron` instance.
 */
function Backlight(displayOTron) {
    if (!(this instanceof Backlight)) {
        return new Backlight(displayOTron);
    }
    
    this.displayOTron = displayOTron;
}

/**
 * Turns off the backlight.
 */
Backlight.prototype.turnOff = function() {
    this.displayOTron.sendCommand(new DisplayOTronCommand('Backlight', 'turnOff'));
};

/**
 * Sets the brightness of a specific LED.
 * @param {Number} ledIndex The index of the LED (should be between 0 and 17).
 * @param {Number} brightness The brightness value (should be between 0 and 255).
 */
Backlight.prototype.setBrightnessOfLed = function(ledIndex, brightness) {
    if (!(typeof ledIndex === 'number') || ledIndex < 0 || ledIndex > 17) {
        throw new Error('The specified LED index is invalid (should be between 0 and 17).');
    }
    
    if (!(typeof brightness === 'number') || brightness < 0 || brightness > 255) {
        throw new Error('The specified brightness value is invalid (should be between 0 and 255).');
    }
    
    var command = new DisplayOTronCommand('Backlight', 'setBrightnessOfLed');
    command.addParameter('ledIndex', ledIndex);
    command.addParameter('brightness', brightness);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets all backlight zones to a specific hue.
 * @param {Number} hue The hue value (should be between 0.0 and 1.0).
 */
Backlight.prototype.setToHue = function(hue) {
    if (!(typeof hue === 'number') || hue < 0.0 || hue > 1.0) {
        throw new Error('The specified hue value is invalid (should be between 0.0 and 1.0).');
    }
    
    var command = new DisplayOTronCommand('Backlight', 'setToHue');
    command.addParameter('hue', hue);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets the left backlight zone to a specific hue.
 * @param {Number} hue The hue value (should be between 0.0 and 1.0).
 */
Backlight.prototype.setLeftToHue = function(hue) {
    if (!(typeof hue === 'number') || hue < 0.0 || hue > 1.0) {
        throw new Error('The specified hue value is invalid (should be between 0.0 and 1.0).');
    }
    
    var command = new DisplayOTronCommand('Backlight', 'setLeftToHue');
    command.addParameter('hue', hue);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets the middle backlight zone to a specific hue.
 * @param {Number} hue The hue value (should be between 0.0 and 1.0).
 */
Backlight.prototype.setMiddleToHue = function(hue) {
    if (!(typeof hue === 'number') || hue < 0.0 || hue > 1.0) {
        throw new Error('The specified hue value is invalid (should be between 0.0 and 1.0).');
    }
    
    var command = new DisplayOTronCommand('Backlight', 'setMiddleToHue');
    command.addParameter('hue', hue);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets the right backlight zone to a specific hue.
 * @param {Number} hue The hue value (should be between 0.0 and 1.0).
 */
Backlight.prototype.setRightToHue = function(hue) {
    if (!(typeof hue === 'number') || hue < 0.0 || hue > 1.0) {
        throw new Error('The specified hue value is invalid (should be between 0.0 and 1.0).');
    }
    
    var command = new DisplayOTronCommand('Backlight', 'setRightToHue');
    command.addParameter('hue', hue);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets all backlight zones to a specific RGB color.
 * @param {Number} red The red value (should be between 0 and 255).
 * @param {Number} green The green value (should be between 0 and 255).
 * @param {Number} blue The blue value (should be between 0 and 255).
 */
Backlight.prototype.setToRGB = function(red, green, blue) {
    if (!(typeof red === 'number') || red < 0 || red > 255) {
        throw new Error('The specified red value is invalid (should be between 0 and 255).');
    }
    
    if (!(typeof green === 'number') || green < 0 || green > 255) {
        throw new Error('The specified green value is invalid (should be between 0 and 255).');
    }
    
    if (!(typeof blue === 'number') || blue < 0 || blue > 255) {
        throw new Error('The specified blue value is invalid (should be between 0 and 255).');
    }
    
    var command = new DisplayOTronCommand('Backlight', 'setToRGB');
    command.addParameter('red', red);
    command.addParameter('green', green);
    command.addParameter('blue', blue);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets a specific backlight zone to a specific RGB color.
 * @param {Number} zoneIndex The index of the zone (should be between 0 and 5).
 * @param {Number} red The red value (should be between 0 and 255).
 * @param {Number} green The green value (should be between 0 and 255).
 * @param {Number} blue The blue value (should be between 0 and 255).
 */
Backlight.prototype.setZoneToRGB = function(zoneIndex, red, green, blue) {
    if (!(typeof zoneIndex === 'number') || zoneIndex < 0 || zoneIndex > 5) {
        throw new Error('The specified zone index is invalid (should be between 0 and 5).');
    }
    
    if (!(typeof red === 'number') || red < 0 || red > 255) {
        throw new Error('The specified red value is invalid (should be between 0 and 255).');
    }
    
    if (!(typeof green === 'number') || green < 0 || green > 255) {
        throw new Error('The specified green value is invalid (should be between 0 and 255).');
    }
    
    if (!(typeof blue === 'number') || blue < 0 || blue > 255) {
        throw new Error('The specified blue value is invalid (should be between 0 and 255).');
    }
    
    var command = new DisplayOTronCommand('Backlight', 'setZoneToRGB');
    command.addParameter('zoneIndex', zoneIndex);
    command.addParameter('red', red);
    command.addParameter('green', green);
    command.addParameter('blue', blue);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets the left backlight zone to a specific RGB color.
 * @param {Number} red The red value (should be between 0 and 255).
 * @param {Number} green The green value (should be between 0 and 255).
 * @param {Number} blue The blue value (should be between 0 and 255).
 */
Backlight.prototype.setLeftToRGB = function(red, green, blue) {
    if (!(typeof red === 'number') || red < 0 || red > 255) {
        throw new Error('The specified red value is invalid (should be between 0 and 255).');
    }
    
    if (!(typeof green === 'number') || green < 0 || green > 255) {
        throw new Error('The specified green value is invalid (should be between 0 and 255).');
    }
    
    if (!(typeof blue === 'number') || blue < 0 || blue > 255) {
        throw new Error('The specified blue value is invalid (should be between 0 and 255).');
    }
    
    var command = new DisplayOTronCommand('Backlight', 'setLeftToRGB');
    command.addParameter('red', red);
    command.addParameter('green', green);
    command.addParameter('blue', blue);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets the middle backlight zone to a specific RGB color.
 * @param {Number} red The red value (should be between 0 and 255).
 * @param {Number} green The green value (should be between 0 and 255).
 * @param {Number} blue The blue value (should be between 0 and 255).
 */
Backlight.prototype.setMiddleToRGB = function(red, green, blue) {
    if (!(typeof red === 'number') || red < 0 || red > 255) {
        throw new Error('The specified red value is invalid (should be between 0 and 255).');
    }
    
    if (!(typeof green === 'number') || green < 0 || green > 255) {
        throw new Error('The specified green value is invalid (should be between 0 and 255).');
    }
    
    if (!(typeof blue === 'number') || blue < 0 || blue > 255) {
        throw new Error('The specified blue value is invalid (should be between 0 and 255).');
    }
    
    var command = new DisplayOTronCommand('Backlight', 'setMiddleToRGB');
    command.addParameter('red', red);
    command.addParameter('green', green);
    command.addParameter('blue', blue);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets the right backlight zone to a specific RGB color.
 * @param {Number} red The red value (should be between 0 and 255).
 * @param {Number} green The green value (should be between 0 and 255).
 * @param {Number} blue The blue value (should be between 0 and 255).
 */
Backlight.prototype.setRightToRGB = function(red, green, blue) {
    if (!(typeof red === 'number') || red < 0 || red > 255) {
        throw new Error('The specified red value is invalid (should be between 0 and 255).');
    }
    
    if (!(typeof green === 'number') || green < 0 || green > 255) {
        throw new Error('The specified green value is invalid (should be between 0 and 255).');
    }
    
    if (!(typeof blue === 'number') || blue < 0 || blue > 255) {
        throw new Error('The specified blue value is invalid (should be between 0 and 255).');
    }
    
    var command = new DisplayOTronCommand('Backlight', 'setRightToRGB');
    command.addParameter('red', red);
    command.addParameter('green', green);
    command.addParameter('blue', blue);
    
    this.displayOTron.sendCommand(command);
};

// Export the `Backlight` class.
module.exports = Backlight;
