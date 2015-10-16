#
#  jvsdisplayotron.py
#  JVSDisplayOTron
#
#  Created by Joris Vervuurt on 05-09-15.
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

import dothat.lcd as lcd
import dothat.backlight as backlight
import dothat.touch as touch

def emit_event(component, event):
    sys.stdout.write(json.dumps({ 'component': component, 'event': event }))
    sys.stdout.flush()

@touch.on(touch.UP)
def handle_up(pin):
    emit_event('Touch', 'up')

@touch.on(touch.DOWN)
def handle_up(pin):
    emit_event('Touch', 'down')

@touch.on(touch.LEFT)
def handle_up(pin):
    emit_event('Touch', 'left')

@touch.on(touch.RIGHT)
def handle_up(pin):
    emit_event('Touch', 'right')

@touch.on(touch.BUTTON)
def handle_up(pin):
    emit_event('Touch', 'button')
    
@touch.on(touch.CANCEL)
def handle_up(pin):
    emit_event('Touch', 'cancel')

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
                backlight.graph_off()
            
            sys.exit()
        elif command == 'reset':
            lcd.clear()
            backlight.off()
            backlight.graph_off()
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
        elif command == 'setZoneToRGB':
            backlight.single_rgb(parameters['zoneIndex'], parameters['red'], parameters['green'], parameters['blue'])
        elif command == 'setLeftToRGB':
            backlight.left_rgb(parameters['red'], parameters['green'], parameters['blue'])
        elif command == 'setMiddleToRGB':
            backlight.mid_rgb(parameters['red'], parameters['green'], parameters['blue'])
        elif command == 'setRightToRGB':
            backlight.right_rgb(parameters['red'], parameters['green'], parameters['blue'])
    elif component == 'BarGraph':
        if command == 'turnOff':
            backlight.graph_off()
        elif command == 'setByPercentage':
            backlight.set_graph(float(parameters['percentage']) / 100)
        elif command == 'setBrightness':
            backlight.graph_set_led_duty(parameters['minimumBrightness'], parameters['maximumBrightness'])
        elif command == 'setEnabledStateOfLed':
            backlight.graph_set_led_polarity(parameters['ledIndex'], 0b00000000)
            backlight.graph_set_led_state(parameters['ledIndex'], 1 if parameters['enabledState'] else 0)
    elif component == 'Touch':
        if command == 'enableHighSensitivityMode':
            touch.high_sensitivity()
        elif command == 'enableEventRepeating':
            touch.enable_repeat(True)
