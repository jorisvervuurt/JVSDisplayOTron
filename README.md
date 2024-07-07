# JVSDisplayOTron
> A lightweight but powerful module, that allows you to easily control a [Display-O-Tron 3000](http://shop.pimoroni.com/products/displayotron-3000) / [HAT](http://shop.pimoroni.com/products/display-o-tron-hat) from [Node.js](https://nodejs.org)

# IMPORTANT NOTICE
This repository has moved to [GitLab](https://gitlab.joris-vervuurt.com/pimoroni/jvsdisplayotron).
The GitHub repository been archived and will no longer be maintained.

## Features
JVSDisplayOTron allows you to make use of almost all features available in [Pimoroni's Python library](https://github.com/pimoroni/dot3k). Both the Display-O-Tron 3000 and Display-O-Tron HAT are supported.

Many thanks go to [Kiwi Electronics](https://www.kiwi-electronics.nl) and [Pimoroni](https://shop.pimoroni.com), as this module wouldn't exist without their support. :-)

## Hardware requirements

* [Raspberry Pi](https://www.raspberrypi.org/help/what-is-a-raspberry-pi/) (tested on a Pi 2 Model B only, but should work on all previous models supported by the Display-O-Tron model you're using)
* Pimoroni [Display-O-Tron 3000](http://shop.pimoroni.com/products/displayotron-3000) or [Display-O-Tron HAT](http://shop.pimoroni.com/products/display-o-tron-hat)

## Installation
Note: these installation instructions assume that your Raspberry Pi is running an installation of [Raspbian Jessie](https://www.raspberrypi.org/downloads/raspbian/), with both [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com) installed. Additionally, JVSDisplayOTron requires Python 2.x, which should come pre-installed with Raspbian.

### Preparing for the installation
1. First of all, make sure that the Raspberry Pi is up-to-date:

        sudo apt-get update && sudo apt-get upgrade

2. Install all pre-requisites using Pimoroni's super-easy installation script:

        curl get.pimoroni.com/dot3k | bash

3. Reboot the Raspberry Pi.

### Installing JVSDisplayOTron
1. Use `cd` to navigate to the Node.js project directory.

2. Install JVSDisplayOTron using npm:

        npm install jvsdisplayotron --save

## Usage
1. Start by loading the module:

        var JVSDisplayOTron = require('jvsdisplayotron');

2. Depending on the Display-O-Tron board you're using, initialize the Display-O-Tron object:

        var dot3k = new JVSDisplayOTron.DOT3k();
        
    or

        var dothat = new JVSDisplayOTron.DOTHAT();

The initialized Display-O-Tron object has a number properties, allowing you to control each component on the Display-O-Tron board:

* `lcd` - an initialized `LCD` object for controlling the display
* `backlight` - an initialized `Backlight` object for controlling the backlight
* `barGraph` - an initialized `BarGraph` object for controlling the bar graph

For the Display-O-Tron 3000:

* `joystick` - an initialized `Joystick` object for handling joystick events

For the Display-O-Tron HAT:

* `touch` - an initialized `Touch` object for handling touch events

Documentation for each of the above mentioned components can be found [here](https://github.com/jorisvervuurt/JVSDisplayOTron/tree/master/documentation).

Code examples that show how to use JVSDisplayOTron can be found [here](https://github.com/jorisvervuurt/JVSDisplayOTron/tree/master/examples).

## License
The MIT License (MIT)

Copyright (c) 2015 Joris Vervuurt Software

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
