<a name="LCDAnimatedCharacter"></a>
## LCDAnimatedCharacter
**Kind**: global class  

* [LCDAnimatedCharacter](#LCDAnimatedCharacter)
  * [new LCDAnimatedCharacter(lcd, memoryPosition, frames, frameRate, [repeatCount])](#new_LCDAnimatedCharacter_new)
  * [.startAnimating([performReset])](#LCDAnimatedCharacter+startAnimating)
  * [.stopAnimating([performReset])](#LCDAnimatedCharacter+stopAnimating)
  * [.reset()](#LCDAnimatedCharacter+reset)

<a name="new_LCDAnimatedCharacter_new"></a>
### new LCDAnimatedCharacter(lcd, memoryPosition, frames, frameRate, [repeatCount])
Creates a new `LCDAnimatedCharacter` object.
Note: you should not instantiate this class directly. Instead, use the `createAnimatedCharacter` function of an initialized `LCD` object.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| lcd | <code>LCD</code> |  | The `LCD` instance. |
| memoryPosition | <code>Number</code> |  | The Display-O-Tron memory position (should be between 0 and 7). |
| frames | <code>Array</code> |  | An array containing at least two arrays, each containing eight 8-bit integers. |
| frameRate | <code>Number</code> |  | The frame rate (frames per second). |
| [repeatCount] | <code>Number</code> | <code>0</code> | The repeat count. 0 means infinite. Optional (0 by default). |

<a name="LCDAnimatedCharacter+startAnimating"></a>
### lcdAnimatedCharacter.startAnimating([performReset])
Starts animating the character.

**Kind**: instance method of <code>[LCDAnimatedCharacter](#LCDAnimatedCharacter)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [performReset] | <code>Boolean</code> | <code>false</code> | A value that indicates whether the character should be reset. Optional (false by default). |

<a name="LCDAnimatedCharacter+stopAnimating"></a>
### lcdAnimatedCharacter.stopAnimating([performReset])
Stops animating the character.

**Kind**: instance method of <code>[LCDAnimatedCharacter](#LCDAnimatedCharacter)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [performReset] | <code>Boolean</code> | <code>false</code> | A value that indicates whether the character should be reset. Optional (false by default). |

<a name="LCDAnimatedCharacter+reset"></a>
### lcdAnimatedCharacter.reset()
Resets the character.

**Kind**: instance method of <code>[LCDAnimatedCharacter](#LCDAnimatedCharacter)</code>
