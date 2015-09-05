<a name="BarGraph"></a>
## BarGraph
**Kind**: global class  

* [BarGraph](#BarGraph)
  * [new BarGraph(displayOTron)](#new_BarGraph_new)
  * [.turnOff()](#BarGraph+turnOff)
  * [.setByPercentage(percentage)](#BarGraph+setByPercentage)
  * [.setBrightness(minimumBrightness, maximumBrightness)](#BarGraph+setBrightness)
  * [.setEnabledStateOfLed(ledIndex, enabledState)](#BarGraph+setEnabledStateOfLed)

<a name="new_BarGraph_new"></a>
### new BarGraph(displayOTron)
Creates a new `BarGraph` object.
Note: you should not instantiate this class directly. Instead, use the `barGraph` property of an initialized `DOTHAT` object.


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

<a name="BarGraph+setBrightness"></a>
### barGraph.setBrightness(minimumBrightness, maximumBrightness)
Sets the minimum and maximum brightness of the bar graph.

**Kind**: instance method of <code>[BarGraph](#BarGraph)</code>  

| Param | Type | Description |
| --- | --- | --- |
| minimumBrightness | <code>Number</code> | The minimum brightness value (should be between 0 and 15). |
| maximumBrightness | <code>Number</code> | The maximum brightness value (should be between 0 and 15). |

<a name="BarGraph+setEnabledStateOfLed"></a>
### barGraph.setEnabledStateOfLed(ledIndex, enabledState)
Sets the enabled state of a specific LED.

**Kind**: instance method of <code>[BarGraph](#BarGraph)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ledIndex | <code>Number</code> | The index of the LED (should be between 0 and 5). |
| enabledState | <code>Boolean</code> | A value that indicates whether the LED is enabled. |

