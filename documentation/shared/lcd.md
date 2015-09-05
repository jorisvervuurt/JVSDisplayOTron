<a name="LCD"></a>
## LCD
**Kind**: global class  

* [LCD](#LCD)
  * [new LCD(displayOTron)](#new_LCD_new)
  * [.clear()](#LCD+clear)
  * [.setContrast(contrast)](#LCD+setContrast)
  * [.setCursorPosition(column, row)](#LCD+setCursorPosition)
  * [.write(value)](#LCD+write)
  * [.createCharacter(options)](#LCD+createCharacter) ⇒ <code>LCDCharacter</code>
  * [.writeCharacter(character)](#LCD+writeCharacter)
  * [.createAnimatedCharacter(options)](#LCD+createAnimatedCharacter) ⇒ <code>LCDAnimatedCharacter</code>
  * [.writeAnimatedCharacter(animatedCharacter)](#LCD+writeAnimatedCharacter)

<a name="new_LCD_new"></a>
### new LCD(displayOTron)
Creates a new `LCD` object.
Note: you should not instantiate this class directly. Instead, use the `lcd` property of an initialized `DOT3k` or `DOTHAT` object.


| Param | Type | Description |
| --- | --- | --- |
| displayOTron | <code>DisplayOTron</code> | The `DisplayOTron` instance. |

<a name="LCD+clear"></a>
### lcd.clear()
Clears the display.

**Kind**: instance method of <code>[LCD](#LCD)</code>  
<a name="LCD+setContrast"></a>
### lcd.setContrast(contrast)
Sets the display contrast.

**Kind**: instance method of <code>[LCD](#LCD)</code>  

| Param | Type | Description |
| --- | --- | --- |
| contrast | <code>Number</code> | The contrast value (should be between 0 and 63). |

<a name="LCD+setCursorPosition"></a>
### lcd.setCursorPosition(column, row)
Sets the cursor position.

**Kind**: instance method of <code>[LCD](#LCD)</code>  

| Param | Type | Description |
| --- | --- | --- |
| column | <code>Number</code> | The horizontal position (should be between 0 and 15). |
| row | <code>Number</code> | The vertical position (should be between 0 and 2). |

<a name="LCD+write"></a>
### lcd.write(value)
Writes a string to the display at the current cursor position.

**Kind**: instance method of <code>[LCD](#LCD)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | The string to write. |

<a name="LCD+createCharacter"></a>
### lcd.createCharacter(options) ⇒ <code>LCDCharacter</code>
Creates a character.

**Kind**: instance method of <code>[LCD](#LCD)</code>  
**Returns**: <code>LCDCharacter</code> - The created character.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An options object, used for initializing the `LCDCharacter` object.  |

The options object should contain the following properties:

| Param | Type | Description |
| --- | --- | --- |
| memoryPosition | <code>Number</code> | The Display-O-Tron memory position (should be between 0 and 7). |
| map | <code>Array</code> | An array containing eight 8-bit integers. |

<a name="LCD+writeCharacter"></a>
### lcd.writeCharacter(character)
Writes a character to the display at the current cursor position.

**Kind**: instance method of <code>[LCD](#LCD)</code>  

| Param | Type | Description |
| --- | --- | --- |
| character | <code>LCDCharacter</code> | A character returned by the `createCharacter` function. |

<a name="LCD+createAnimatedCharacter"></a>
### lcd.createAnimatedCharacter(options) ⇒ <code>LCDAnimatedCharacter</code>
Creates an animated character.

**Kind**: instance method of <code>[LCD](#LCD)</code>  
**Returns**: <code>LCDAnimatedCharacter</code> - The created animated character.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | An options object, used for initializing the `LCDAnimatedCharacter` object.  |

The options object should contain the following properties:

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| lcd | <code>LCD</code> |  | The `LCD` instance. |
| memoryPosition | <code>Number</code> |  | The Display-O-Tron memory position (should be between 0 and 7). |
| frames | <code>Array</code> |  | An array containing at least two arrays, each containing eight 8-bit integers. |
| frameRate | <code>Number</code> |  | The frame rate (frames per second). |
| [repeatCount] | <code>Number</code> | <code>0</code> | The repeat count. 0 means infinite. Optional (0 by default). |

<a name="LCD+writeAnimatedCharacter"></a>
### lcd.writeAnimatedCharacter(animatedCharacter)
Writes an animated character to the display at the current cursor position.

**Kind**: instance method of <code>[LCD](#LCD)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animatedCharacter | <code>LCDAnimatedCharacter</code> | An animated character returned by the `createAnimatedCharacter` function. |



