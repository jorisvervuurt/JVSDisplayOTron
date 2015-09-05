//
//  lcdcharacter.js
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

/**
 * Creates a new `LCDCharacter` object.
 * Note: you should not instantiate this class directly. Instead, use the `createCharacter` function of an initialized `LCD` object.
 * @constructor
 * @param {Number} memoryPosition The Display-O-Tron memory position (should be between 0 and 7).
 * @param {Array} map An array containing eight 8-bit integers.
 */
function LCDCharacter(memoryPosition, map) {
    if (!(this instanceof LCDCharacter)) {
        return new LCDCharacter(memoryPosition, map);
    }
    
    if (!(typeof memoryPosition === 'number') || memoryPosition < 0 || memoryPosition > 7) {
        throw new Error('The specified memory position is invalid (should be between 0 and 7).');
    }
    
    if (!Array.isArray(map) || map.length !== 8) {
        throw new Error('The specified map is invalid (should be an array containing eight 8-bit integers).');
    }
    
    this.memoryPosition = memoryPosition;
    this.map = map;
}

// Export the `LCDCharacter` class.
module.exports = LCDCharacter;
