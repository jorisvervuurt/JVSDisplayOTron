<a name="DisplayOTron"></a>
## DisplayOTron
**Kind**: global class  

* [DisplayOTron](#DisplayOTron)
  * [new DisplayOTron(model)](#new_DisplayOTron_new)
  * [.reset()](#DisplayOTron+reset)
  * [.kill([performReset])](#DisplayOTron+kill)
  * [.sendCommand(command, [callback])](#DisplayOTron+sendCommand)

<a name="new_DisplayOTron_new"></a>
### new DisplayOTron(model)
Creates a new `DisplayOTron` object.
Note: this class is used internally only. You should not instantiate or call it directly.


| Param | Type | Description |
| --- | --- | --- |
| model | <code>String</code> | The Display-O-Tron model (should be either '3k' or 'HAT'). |

<a name="DisplayOTron+reset"></a>
### displayOTron.reset()
Resets the Display-O-Tron.

**Kind**: instance method of <code>[DisplayOTron](#DisplayOTron)</code>  
<a name="DisplayOTron+kill"></a>
### displayOTron.kill([performReset])
Kills the Python process used by JVSDisplayOTron.

**Kind**: instance method of <code>[DisplayOTron](#DisplayOTron)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [performReset] | <code>Boolean</code> | <code>false</code> | A value that indicates whether a reset should be performed prior to killing the process. Optional (false by default). |

<a name="DisplayOTron+sendCommand"></a>
### displayOTron.sendCommand(command, [callback])
Sends a command to the Display-O-Tron.

**Kind**: instance method of <code>[DisplayOTron](#DisplayOTron)</code>  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>DisplayOTronCommand</code> | The command to send. |
| [callback] | <code>function</code> | A function to call when the command has been sent. Optional. |
