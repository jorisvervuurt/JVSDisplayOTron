//
//  lcdanimatedcharacter.js
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

// Load dependencies
var util = require('util'),
    events = require('events');

/**
 * Creates a new `LCDAnimatedCharacter` object.
 * Note: you should not instantiate this class directly. Instead, use the `createAnimatedCharacter` function of an initialized `LCD` object.
 * @constructor
 * @param {LCD} lcd The `LCD` instance.
 * @param {Number} memoryPosition The Display-O-Tron memory position (should be between 0 and 7).
 * @param {Array} frames An array containing at least two arrays, each containing eight 8-bit integers.
 * @param {Number} frameRate The frame rate (frames per second).
 * @param {Number} [repeatCount=0] The repeat count. 0 means infinite. Optional (0 by default).
 */
function LCDAnimatedCharacter(lcd, memoryPosition, frames, frameRate, repeatCount) {
    if (!(this instanceof LCDAnimatedCharacter)) {
        return new LCDAnimatedCharacter(lcd, memoryPosition, frames, frameRate, repeatCount);
    }
    
    if (!(typeof memoryPosition === 'number') || memoryPosition < 0 || memoryPosition > 7) {
        throw new Error('The specified memory position is invalid (should be between 0 and 7).');
    }
    
    if (!Array.isArray(frames) || frames.length < 2) {
        throw new Error('The specified frames are invalid (should be an array containing at least two arrays, each containing eight 8-bit integers).');
    }
    
    if (!(typeof frameRate === 'number') || frameRate < 1) {
        throw new Error('The specified frame rate is invalid (should be greater or equal to 1).');
    }
    
    if (typeof repeatCount === 'number') {
        if (repeatCount < 0) {
            throw new Error('The specified repeat count is invalid (should be greater than or equal to 0).');
        }
    } else {
        repeatCount = 0;
    }
    
    this.lcd = lcd;
    
    this.memoryPosition = memoryPosition;
    this.frames = frames;   
    this.frameRate = frameRate;
    this.repeatCount = repeatCount;
    
    this.animationInterval = null;
    this.isAnimating = false;
    this.currentCycle = 0;
    this.currentFrame = 0;
    
    events.EventEmitter.call(this);
}

// Inherit the prototype methods of `EventEmitter`.
util.inherits(LCDAnimatedCharacter, events.EventEmitter);

/**
 * Starts animating the character.
 * @param {Boolean} [performReset=false] A value that indicates whether the character should be reset. Optional (false by default).
 */
LCDAnimatedCharacter.prototype.startAnimating = function(performReset) {
    if (performReset) {
        this.reset();
    }
    
    if (!this.isAnimating) {
        var self = this;
        
        this.animationInterval = setInterval(function() {
            if (self.currentFrame < self.frames.length - 1) {
                self.currentFrame++;
            } else {
                self.currentCycle++;
                self.currentFrame = 0;
            }
            
            self.lcd.createCharacter({
                memoryPosition: self.memoryPosition,
                map: self.frames[self.currentFrame],
                saveInMemory: false
            });
            
            if (self.repeatCount !== 0 && self.currentCycle === self.repeatCount) {
                self.stopAnimating(true);
            }
        }, 1000 / this.frameRate);
        
        this.isAnimating = true;
    }
    
    this.emit('startAnimating');
};

/**
 * Stops animating the character.
 * @param {Boolean} [performReset=false] A value that indicates whether the character should be reset. Optional (false by default).
 */
LCDAnimatedCharacter.prototype.stopAnimating = function(performReset) {    
    if (this.animationInterval) {
        clearInterval(this.animationInterval);
        this.animationInterval = null;
    }
    
    if (performReset) {
        this.reset();
    }
    
    this.isAnimating = false;
    
    this.emit('stopAnimating');
};

/**
 * Resets the character.
 */
LCDAnimatedCharacter.prototype.reset = function() {
    this.currentCycle = 0;
    this.currentFrame = 0;
    
    this.lcd.createCharacter({
        memoryPosition: this.memoryPosition,
        map: this.frames[0],
        saveInMemory: false
    });
};

// Export the `LCDAnimatedCharacter` class.
module.exports = LCDAnimatedCharacter;
