//
//  displayotroncommand.js
//  JVSDisplayOTron
//
//  Created by Joris Vervuurt on 05-09-15.
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
 * Creates a new `DisplayOTronCommand` object.
 * Note: this class is used internally only. You should not instantiate or call it directly.
 * @constructor
 * @param {String} component The name of the component.
 * @param {String} command The name of the command.
 */
function DisplayOTronCommand(component, command) {
    if (!(this instanceof DisplayOTronCommand)) {
        return new DisplayOTronCommand(component, command);
    }
    
    this.component = component;
    this.command = command;
    this.parameters = {};
}

/**
 * Adds a parameter to the command.
 * @param {String} name The name of the parameter.
 * @param {*} value The value of the parameter.
 */
DisplayOTronCommand.prototype.addParameter = function(name, value) {
    this.parameters[name] = value;
};

/**
 * Returns the JSON representation of the command.
 * @returns {String} The JSON representation of the command.
 */
DisplayOTronCommand.prototype.jsonRepresentation = function() {
    return JSON.stringify(this);
};

// Export the `DisplayOTronCommand` class.
module.exports = DisplayOTronCommand;
