### @hideIteration true

# My Tutorial

## Text senden

Nimm ein ``||radio:sende Text über Funk||`` Block and platziere ihn in den ``||input:wenn Knopf A geklickt||``.

```template
input.onButtonPressed(Button.A, function on_button_pressed_a() {

})
```

```blocks
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Hallo")
})
```

```customts
namespace radio {
    radio.setGroup(1)
}
```
