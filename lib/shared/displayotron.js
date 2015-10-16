//
//  displayotron.js
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
    events = require('events'),
    path = require('path'),
    spawn = require('child_process').spawn,
    DisplayOTronCommand = require('./displayotroncommand.js');

/**
 * Creates a new `DisplayOTron` object.
 * Note: this class is used internally only. You should not instantiate or call it directly.
 * @constructor
 * @param {String} model The Display-O-Tron model (should be either '3k' or 'HAT').
 */
function DisplayOTron(model) {
    if (!(this instanceof DisplayOTron)) {
        return new DisplayOTron(model);
    }
    
    this.model = model;
    
    this.pythonProcess = null;
    
    this.reset();
    
    events.EventEmitter.call(this);
}

// Inherit the prototype of `EventEmitter`.
util.inherits(DisplayOTron, events.EventEmitter);

/**
 * Resets the Display-O-Tron.
 */
DisplayOTron.prototype.reset = function() {
    this.sendCommand(new DisplayOTronCommand('DisplayOTron', 'reset'));
};

/**
 * Kills the Python process used by JVSDisplayOTron.
 * @param {Boolean} [performReset=false] A value that indicates whether a reset should be performed prior to killing the process. Optional (false by default).
 */
DisplayOTron.prototype.kill = function(performReset) {
    var command = new DisplayOTronCommand('DisplayOTron', 'kill');
    command.addParameter('performReset', (performReset === true));
    
    var self = this;
    
    this.sendCommand(command, function() {
        self.pythonProcess = null;
    });
};

/**
 * Sends a command to the Display-O-Tron.
 * @param {DisplayOTronCommand} command The command to send.
 * @param {Function} [callback] A function to call when the command has been sent. Optional.
 */
DisplayOTron.prototype.sendCommand = function(command, callback) {
    var self = this;
    
    this.spawnPythonProcess(function() {
        self.pythonProcess.stdin.write(command.jsonRepresentation() + '\n');
        
        if (callback) {
            callback();
        }
    });
};

/**
 * Spawns a new Python process (if no process is currently running).
 * @private
 * @param {Function} [callback] A function to call when the process has been spawned. Optional.
 */
DisplayOTron.prototype.spawnPythonProcess = function(callback) {
    if (!this.pythonProcess) {
        this.pythonProcess = spawn('python', [path.join(__dirname, '../../bin/dot' + this.model.toLowerCase() +  '/jvsdisplayotron.py')]);
        
        this.pythonProcess.stdin.setEncoding('utf8');
        
        var self = this;
        
        this.pythonProcess.stdout.on('data', function(data) {
            self.emit('event', JSON.parse(data));
        });
        
        if (callback) {
            callback();
        }
    } else {
        if (callback) {
            callback();
        }
    }
};

// Export the `DisplayOTron` class.
module.exports = DisplayOTron;
