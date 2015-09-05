<a name="Joystick"></a>
## Joystick
**Kind**: global class  
<a name="new_Joystick_new"></a>
### new Joystick(displayOTron)
Creates a new `Joystick` object.
Note: you should not instantiate this class directly. Instead, use the `joystick` property of an initialized `DOT3k` object.


| Param | Type | Description |
| --- | --- | --- |
| displayOTron | <code>DisplayOTron</code> | The `DisplayOTron` instance. |

### Events
<code>[Joystick](#Joystick)</code> is an `EventEmitter`. 

| Event | Description |
| --- | --- |
| up | Fired when the joystick is moved up. |
| down | Fired when the joystick is moved down. |
| left | Fired when the joystick is moved to the left. |
| right | Fired when the joystick is moved to the right. |
| button | Fired when the joystick is pressed down. |