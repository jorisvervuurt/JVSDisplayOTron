<a name="DisplayOTronCommand"></a>
## DisplayOTronCommand
**Kind**: global class  

* [DisplayOTronCommand](#DisplayOTronCommand)
  * [new DisplayOTronCommand(component, command)](#new_DisplayOTronCommand_new)
  * [.addParameter(name, value)](#DisplayOTronCommand+addParameter)
  * [.jsonRepresentation()](#DisplayOTronCommand+jsonRepresentation) ⇒ <code>String</code>

<a name="new_DisplayOTronCommand_new"></a>
### new DisplayOTronCommand(component, command)
Creates a new `DisplayOTronCommand` object.
Note: this class is used internally only. You should not instantiate or call it directly.


| Param | Type | Description |
| --- | --- | --- |
| component | <code>String</code> | The name of the component. |
| command | <code>String</code> | The name of the command. |

<a name="DisplayOTronCommand+addParameter"></a>
### displayOTronCommand.addParameter(name, value)
Adds a parameter to the command.

**Kind**: instance method of <code>[DisplayOTronCommand](#DisplayOTronCommand)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the parameter. |
| value | <code>\*</code> | The value of the parameter. |

<a name="DisplayOTronCommand+jsonRepresentation"></a>
### displayOTronCommand.jsonRepresentation() ⇒ <code>String</code>
Returns the JSON representation of the command.

**Kind**: instance method of <code>[DisplayOTronCommand](#DisplayOTronCommand)</code>  
**Returns**: <code>String</code> - The JSON representation of the command.  
