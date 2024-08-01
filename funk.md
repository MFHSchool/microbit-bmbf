### @hideIteration false
### @explicitHints false

# Würfeln über Funk

## Zahl anzeigen

Als erstes wollen wir auf unserem Mikrocontroller eine Zahl anzeigen. 

Hierzu müssen wir in den ``||input:wenn Knopf A geklickt||`` Block einen ``||basic:zeige Zahl||`` Block ziehen.

```blocks
input.onButtonPressed(Button.A, function () {	
    basic.showNumber(1)
})
```

```customts
namespace radio {
    radio.setGroup(1)
}
```

```template
input.onButtonPressed(Button.A, function () {
})
```

## Senden einer Zahl

Wir wollen eine Zahl an den anderen Mikrocontroller senden. Sollte es eine Zahl zwischen 1 und 6 sein, so wandelt dieser die Zahl in Würfelpunkte um.
Das ganze soll geschehen, wenn wir die Taste B auf dem Mikrocontroller drücken.

Füge hierzu einen ``||input:wenn Knopf A geklickt||`` Block hinzu und wechsel den Knopf zu **B**.
Zum Senden der Zahl muss hier ein ``||radio:sende Zahl 0 über Funk||`` Block hier eingesetzt werden.

```blocks
input.onButtonPressed(Button.A, function () {	
    basic.showNumber(1)
})

input.onButtonPressed(Button.B, function () {	
    radio.sendNumber(2)
})
```

## Zufällige Zahl senden

Anstatt eine feste Zahl zu senden, wollen wir nun eine zufällige Zahl zwischen 1 und 6 senden. Füge hierzu einen ``||math:wähle eine zufällige Zahl von 0 bis 10||`` Block in den ``||radio:sende Zahl über Funk||`` Block ein. Setze den Bereich der zufälligen Zahl auf den Bereich zwischen **1** und **6**.


```blocks
input.onButtonPressed(Button.A, function () {	
    basic.showNumber(1)
})

input.onButtonPressed(Button.B, function () {	
    radio.sendNumber(randint(1, 6))
})
```

## Ein Geheimnis

Der zweite Mikrocontroller besitzt noch ein Geheimnis. Sende hierzu den richtigen Namen von Lady Bluetooth per Funk an den anderen Mikrocontroller.



```blocks
input.

input.onButtonPressed(Button.A, function () {	
    basic.showNumber(1)
})

input.onButtonPressed(Button.B, function () {	
    radio.sendNumber(randint(1, 6))
})

input.onLightLevelCheck(LightCondition.Below, function () {
    radio.sendNumber(12345)
})
```
