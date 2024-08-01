enum LightCondition {
    //% block="above"
    Above,
    //% block="below"
    Below
}

let lightThreshold = 128
let checkAbove = true

//% block="set light threshold to $value"
//% category="Input"
//% value.min=0 value.max=255 value.defl=128
function setLightThreshold(value: number) {
    lightThreshold = value
}

//% block="check if light level is $condition threshold"
//% category="Input"
//% condition.shadow="dropdown" condition.options="LightCondition"
function onLightLevelCheck(condition: LightCondition, handler: () => void) {
    checkAbove = (condition == LightCondition.Above)
    control.inBackground(function() {
        while (true) {
            if (checkAbove) {
                if (input.lightLevel() > lightThreshold) {
                    handler()
                }
            } else {
                if (input.lightLevel() <= lightThreshold) {
                    handler()
                }
            }
            basic.pause(100) // Check every 100ms
        }
    })
}
