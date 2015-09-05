<a name="BarGraph"></a>
## BarGraph
**Kind**: global class  

* [BarGraph](#BarGraph)
  * [new BarGraph(displayOTron)](#new_BarGraph_new)
  * [.turnOff()](#BarGraph+turnOff)
  * [.setByPercentage(percentage)](#BarGraph+setByPercentage)
  * [.setBrightnessOfLed(ledIndex, brightness)](#BarGraph+setBrightnessOfLed)

<a name="new_BarGraph_new"></a>
### new BarGraph(displayOTron)
Creates a new `BarGraph` object.
Note: you should not instantiate this class directly. Instead, use the `barGraph` property of an initialized `DOT3k` object.


| Param | Type | Description |
| --- | --- | --- |
| displayOTron | <code>DisplayOTron</code> | The `DisplayOTron` instance. |

<a name="BarGraph+turnOff"></a>
### barGraph.turnOff()
Turns off the bar graph.

**Kind**: instance method of <code>[BarGraph](#BarGraph)</code>  
<a name="BarGraph+setByPercentage"></a>
### barGraph.setByPercentage(percentage)
Sets the bar graph by a percentage.

**Kind**: instance method of <code>[BarGraph](#BarGraph)</code>  

| Param | Type | Description |
| --- | --- | --- |
| percentage | <code>Number</code> | The percentage (should be between 0 and 100). |

<a name="BarGraph+setBrightnessOfLed"></a>
### barGraph.setBrightnessOfLed(ledIndex, brightness)
Sets the brightness of a specific LED.

**Kind**: instance method of <code>[BarGraph](#BarGraph)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ledIndex | <code>Number</code> | The index of the LED (should be between 0 and 8). |
| brightness | <code>Number</code> | The brightness value (should be between 0 and 255). |

