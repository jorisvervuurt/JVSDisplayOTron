//
//  lcd.js
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

// Load dependencies.,
var DisplayOTronCommand = require('./displayotroncommand.js'),
    LCDCharacter = require('./lcdcharacter.js'),
    LCDAnimatedCharacter = require('./lcdanimatedcharacter.js');

/**
 * Creates a new `LCD` object.
 * Note: you should not instantiate this class directly. Instead, use the `lcd` property of an initialized `DOT3k` or `DOTHAT` object.
 * @constructor
 * @param {DisplayOTron} displayOTron The `DisplayOTron` instance.
 */
function LCD(displayOTron) {
    if (!(this instanceof LCD)) {
        return new LCD(displayOTron);
    }
    
    this.displayOTron = displayOTron;
    
    this.characters = {};
}

/**
 * Clears the display.
 */
LCD.prototype.clear = function() {
    this.displayOTron.sendCommand(new DisplayOTronCommand('LCD', 'clear'));
};

/**
 * Sets the display contrast.
 * @param {Number} contrast The contrast value (should be between 0 and 63).
 */
LCD.prototype.setContrast = function(contrast) {
    if (!(typeof contrast === 'number') || contrast < 0 || contrast > 63) {
        throw new Error('The specified contrast value is invalid (should be between 0 and 63).');
    }
    
    var command = new DisplayOTronCommand('LCD', 'setContrast');
    command.addParameter('contrast', contrast);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Sets the cursor position.
 * @param {Number} column The horizontal position (should be between 0 and 15).
 * @param {Number} row The vertical position (should be between 0 and 2).
 */
LCD.prototype.setCursorPosition = function(column, row) {
    if (!(typeof column === 'number') || column < 0 || column > 15) {
        throw new Error('The specified column is invalid (should be between 0 and 15).');
    }
    
    if (!(typeof row === 'number') || row < 0 || row > 2) {
        throw new Error('The specified row is invalid (should be between 0 and 2).');
    }
    
    var command = new DisplayOTronCommand('LCD', 'setCursorPosition');
    command.addParameter('column', column);
    command.addParameter('row', row);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Writes a string to the display at the current cursor position.
 * @param {String} value The string to write.
 */
LCD.prototype.write = function(value) {
    if (!(typeof value === 'string')) {
        throw new Error('The specified value is invalid.');
    }
    
    var command = new DisplayOTronCommand('LCD', 'write');
    command.addParameter('value', value);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Creates a character.
 * @param {Object} options An options object, containing the following properties:
       {Number} memoryPosition The Display-O-Tron memory position (should be between 0 and 7).
       {Array} map An array containing eight 8-bit integers.
 * @return {LCDCharacter} The created character.
 */
LCD.prototype.createCharacter = function(options) {
    options = options || {};
    options.saveInMemory = (options.saveInMemory === undefined) || (options.saveInMemory === true);
    
    var character = new LCDCharacter(options.memoryPosition, options.map);
    
    if (options.saveInMemory) {
        var existingCharacter = this.characters[options.memoryPosition];
        
        if (existingCharacter) {
            if ((existingCharacter instanceof LCDAnimatedCharacter) && existingCharacter.isAnimating) {
                existingCharacter.stopAnimating();
            }
        }
        
        this.characters[options.memoryPosition] = character;
    }
    
    var command = new DisplayOTronCommand('LCD', 'createCharacter');
    command.addParameter('memoryPosition', options.memoryPosition);
    command.addParameter('map', options.map);
    
    this.displayOTron.sendCommand(command);
    
    return character;
};

/**
 * Writes a character to the display at the current cursor position.
 * @param {LCDCharacter} character A character returned by the `createCharacter` function.
 */
LCD.prototype.writeCharacter = function(character) {
    if (!(character instanceof LCDCharacter)) {
        throw new Error('The specified character is invalid (should be an instance of class LCDCharacter).');
    }
    
    var command = new DisplayOTronCommand('LCD', 'writeCharacter');
    command.addParameter('memoryPosition', character.memoryPosition);
    
    this.displayOTron.sendCommand(command);
};

/**
 * Creates an animated character.
 * @param {Object} options An options object, containing the following properties:
       {Number} memoryPosition The Display-O-Tron memory position (should be between 0 and 7).
       {Array} frames An array containing at least two arrays, each containing eight 8-bit integers.
       {Number} frameRate The frame rate (frames per second).
       {Number} [repeatCount=0] The repeat count. 0 means infinite. Optional (0 by default).
 * @return {LCDAnimatedCharacter} The created animated character.
 */
LCD.prototype.createAnimatedCharacter = function(options) {
    var animatedCharacter = new LCDAnimatedCharacter(this, options.memoryPosition, options.frames, options.frameRate, options.repeatCount);
    var shouldStartAnimatingCreatedCharacter = false;
    
    var existingCharacter = this.characters[options.memoryPosition];
    
    if (existingCharacter) {
        if ((existingCharacter instanceof LCDAnimatedCharacter) && existingCharacter.isAnimating) {
            shouldStartAnimatingCreatedCharacter = true;
            existingCharacter.stopAnimating();
        }
    }
    
    this.createCharacter({
        memoryPosition: options.memoryPosition,
        map: options.frames[0],
        saveInMemory: false
    });
    
    if (shouldStartAnimatingCreatedCharacter) {
        animatedCharacter.startAnimating();
    }
    
    this.characters[options.memoryPosition] = animatedCharacter;
    
    return animatedCharacter;
};

/**
 * Writes an animated character to the display at the current cursor position.
 * @param {LCDAnimatedCharacter} animatedCharacter An animated character returned by the `createAnimatedCharacter` function.
 */
LCD.prototype.writeAnimatedCharacter = function(animatedCharacter) {
    if (!(animatedCharacter instanceof LCDAnimatedCharacter)) {
        throw new Error('The specified animated character is invalid (should be an instance of class LCDAnimatedCharacter).');
    }
    
    this.writeCharacter(new LCDCharacter(animatedCharacter.memoryPosition, animatedCharacter.frames[0]));
    
    if (!animatedCharacter.isAnimating) {
        animatedCharacter.startAnimating();
    }
};

// Export the `LCD` class.
module.exports = LCD;
