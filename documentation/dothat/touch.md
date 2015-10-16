<a name="Touch"></a>
## Touch
**Kind**: global class  

* [Touch](#Touch)
  * [new Touch(displayOTron)](#new_Touch_new)
  * [.enableHighSensitivityMode()](#Touch+enableHighSensitivityMode)
  * [.enableEventRepeating()](#Touch+enableEventRepeating)

<a name="new_Touch_new"></a>
### new Touch(displayOTron)
Creates a new `Touch` object.
Note: you should not instantiate this class directly. Instead, use the `touch` property of an initialized `DOTHAT` object.


| Param | Type | Description |
| --- | --- | --- |
| displayOTron | <code>DisplayOTron</code> | The `DisplayOTron` instance. |

<a name="Touch+enableHighSensitivityMode"></a>
### touch.enableHighSensitivityMode()
Enables high sensitivity mode.

<a name="Touch+enableEventRepeating"></a>
### touch.enableEventRepeating()
Enables event repeating.

### Events
<code>[Touch](#Touch)</code> is an `EventEmitter`. 

| Event | Description |
| --- | --- |
| up | Fired when the up button is touched. |
| down | Fired when the down button is touched. |
| left | Fired when the left button is touched. |
| right | Fired when the right button is touched. |
| button | Fired when the enter button is touched. |
| cancel | Fired when the cancel button is touched. |
