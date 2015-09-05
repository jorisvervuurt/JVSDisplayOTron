#
#  jvsdisplayotron.py
#  JVSDisplayOTron
#
#  Created by Joris Vervuurt on 19-08-15.
#  Copyright (c) 2015 Joris Vervuurt Software. All rights reserved.
#

#  The MIT License (MIT)
#
#  Copyright (c) 2015 Joris Vervuurt Software
#
#  Permission is hereby granted, free of charge, to any person obtaining a copy
#  of this software and associated documentation files (the "Software"), to deal
#  in the Software without restriction, including without limitation the rights
#  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
#  copies of the Software, and to permit persons to whom the Software is
#  furnished to do so, subject to the following conditions:
#
#  The above copyright notice and this permission notice shall be included in all
#  copies or substantial portions of the Software.
#
#  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
#  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
#  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
#  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
#  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
#  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
#  SOFTWARE.

import sys
import json

import dot3k.lcd as lcd
import dot3k.backlight as backlight
import dot3k.joystick as joystick

def emit_event(component, event):
    sys.stdout.write(json.dumps({ 'component': component, 'event': event }))
    sys.stdout.flush()

@joystick.on(joystick.UP)
def handle_up(pin):
    emit_event('Joystick', 'up')

@joystick.on(joystick.DOWN)
def handle_up(pin):
    emit_event('Joystick', 'down')

@joystick.on(joystick.LEFT)
def handle_up(pin):
    emit_event('Joystick', 'left')

@joystick.on(joystick.RIGHT)
def handle_up(pin):
    emit_event('Joystick', 'right')

@joystick.on(joystick.BUTTON)
def handle_up(pin):
    emit_event('Joystick', 'button')

while True:
    data = json.loads(raw_input())
    
    component = data['component']
    command = data['command']
    parameters = data['parameters']
    
    if component == 'DisplayOTron':
        if command == 'kill':
            if parameters['performReset']:
                lcd.clear()
                backlight.off()
                backlight.set_graph(0.0)
            
            sys.exit()
        elif command == 'reset':
            lcd.clear()
            backlight.off()
            backlight.set_graph(0.0)
    elif component == 'LCD':
        if command == 'clear':
            lcd.clear()
        elif command == 'setContrast':
            lcd.set_contrast(parameters['contrast'])
        elif command == 'setCursorPosition':
            lcd.set_cursor_position(parameters['column'], parameters['row'])
        elif command == 'write':
            lcd.write(parameters['value'])
        elif command == 'createCharacter':
            lcd.create_char(parameters['memoryPosition'], parameters['map'])
        elif command == 'writeCharacter':
            lcd.write(chr(parameters['memoryPosition']))
    elif component == 'Backlight':
        if command == 'turnOff':
            backlight.off()
        elif command == 'useRBGMode':
            backlight.use_rbg()
        elif command == 'setBrightnessOfLed':
            backlight.set(parameters['ledIndex'], parameters['brightness'])
        elif command == 'setToHue':
            backlight.hue(parameters['hue'])
        elif command == 'setLeftToHue':
            backlight.left_hue(parameters['hue'])
        elif command == 'setMiddleToHue':
            backlight.mid_hue(parameters['hue'])
        elif command == 'setRightToHue':
            backlight.right_hue(parameters['hue'])
        elif command == 'setToRGB':
            backlight.rgb(parameters['red'], parameters['green'], parameters['blue'])
        elif command == 'setLeftToRGB':
            backlight.left_rgb(parameters['red'], parameters['green'], parameters['blue'])
        elif command == 'setMiddleToRGB':
            backlight.mid_rgb(parameters['red'], parameters['green'], parameters['blue'])
        elif command == 'setRightToRGB':
            backlight.right_rgb(parameters['red'], parameters['green'], parameters['blue'])
    elif component == 'BarGraph':
        if command == 'turnOff':
            backlight.set_graph(0.0)
        elif command == 'setByPercentage':
            backlight.set_graph(float(parameters['percentage']) / 100)
        elif command == 'setBrightnessOfLed':
            backlight.set_bar(parameters['ledIndex'], parameters['brightness'])
