<a name="Backlight"></a>
## Backlight
**Kind**: global class  

* [Backlight](#Backlight)
  * [new Backlight(displayOTron)](#new_Backlight_new)
  * [.turnOff()](#Backlight+turnOff)
  * [.useRBGMode()](#Backlight+useRBGMode)
  * [.setBrightnessOfLed(ledIndex, brightness)](#Backlight+setBrightnessOfLed)
  * [.setToHue(hue)](#Backlight+setToHue)
  * [.setLeftToHue(hue)](#Backlight+setLeftToHue)
  * [.setMiddleToHue(hue)](#Backlight+setMiddleToHue)
  * [.setRightToHue(hue)](#Backlight+setRightToHue)
  * [.setToRGB(red, green, blue)](#Backlight+setToRGB)
  * [.setLeftToRGB(red, green, blue)](#Backlight+setLeftToRGB)
  * [.setMiddleToRGB(red, green, blue)](#Backlight+setMiddleToRGB)
  * [.setRightToRGB(red, green, blue)](#Backlight+setRightToRGB)

<a name="new_Backlight_new"></a>
### new Backlight(displayOTron)
Creates a new `Backlight` object.
Note: you should not instantiate this class directly. Instead, use the `backlight` property of an initialized `DOT3k` object.


| Param | Type | Description |
| --- | --- | --- |
| displayOTron | <code>DisplayOTron</code> | The `DisplayOTron` instance. |

<a name="Backlight+turnOff"></a>
### backlight.turnOff()
Turns off the backlight.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  
<a name="Backlight+useRBGMode"></a>
### backlight.useRBGMode()
Changes the backlight driver to RBG mode (instead of RGB) for early Display-O-Tron boards with reversed B/G channels.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  
<a name="Backlight+setBrightnessOfLed"></a>
### backlight.setBrightnessOfLed(ledIndex, brightness)
Sets the brightness of a specific LED.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ledIndex | <code>Number</code> | The index of the LED (should be between 0 and 8). |
| brightness | <code>Number</code> | The brightness value (should be between 0 and 255). |

<a name="Backlight+setToHue"></a>
### backlight.setToHue(hue)
Sets all backlight zones to a specific hue.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  

| Param | Type | Description |
| --- | --- | --- |
| hue | <code>Number</code> | The hue value (should be between 0.0 and 1.0). |

<a name="Backlight+setLeftToHue"></a>
### backlight.setLeftToHue(hue)
Sets the left backlight zone to a specific hue.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  

| Param | Type | Description |
| --- | --- | --- |
| hue | <code>Number</code> | The hue value (should be between 0.0 and 1.0). |

<a name="Backlight+setMiddleToHue"></a>
### backlight.setMiddleToHue(hue)
Sets the middle backlight zone to a specific hue.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  

| Param | Type | Description |
| --- | --- | --- |
| hue | <code>Number</code> | The hue value (should be between 0.0 and 1.0). |

<a name="Backlight+setRightToHue"></a>
### backlight.setRightToHue(hue)
Sets the right backlight zone to a specific hue.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  

| Param | Type | Description |
| --- | --- | --- |
| hue | <code>Number</code> | The hue value (should be between 0.0 and 1.0). |

<a name="Backlight+setToRGB"></a>
### backlight.setToRGB(red, green, blue)
Sets all backlight zones to a specific RGB color.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  

| Param | Type | Description |
| --- | --- | --- |
| red | <code>Number</code> | The red value (should be between 0 and 255). |
| green | <code>Number</code> | The green value (should be between 0 and 255). |
| blue | <code>Number</code> | The blue value (should be between 0 and 255). |

<a name="Backlight+setLeftToRGB"></a>
### backlight.setLeftToRGB(red, green, blue)
Sets the left backlight zone to a specific RGB color.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  

| Param | Type | Description |
| --- | --- | --- |
| red | <code>Number</code> | The red value (should be between 0 and 255). |
| green | <code>Number</code> | The green value (should be between 0 and 255). |
| blue | <code>Number</code> | The blue value (should be between 0 and 255). |

<a name="Backlight+setMiddleToRGB"></a>
### backlight.setMiddleToRGB(red, green, blue)
Sets the middle backlight zone to a specific RGB color.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  

| Param | Type | Description |
| --- | --- | --- |
| red | <code>Number</code> | The red value (should be between 0 and 255). |
| green | <code>Number</code> | The green value (should be between 0 and 255). |
| blue | <code>Number</code> | The blue value (should be between 0 and 255). |

<a name="Backlight+setRightToRGB"></a>
### backlight.setRightToRGB(red, green, blue)
Sets the right backlight zone to a specific RGB color.

**Kind**: instance method of <code>[Backlight](#Backlight)</code>  

| Param | Type | Description |
| --- | --- | --- |
| red | <code>Number</code> | The red value (should be between 0 and 255). |
| green | <code>Number</code> | The green value (should be between 0 and 255). |
| blue | <code>Number</code> | The blue value (should be between 0 and 255). |
