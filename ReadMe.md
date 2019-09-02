# Konami Code JS #

Listen for the following sequence:

```
up up down down left right left right B A
```

Then launches a callback

## Getting started ##

Initialize the listener:

```JS
KonamiCodeListener.init(function(){
    console.log("The input was successful. Get 30+ lives.");
},
function ()
{
    console.log("The sequence was broken. All your lives re belong to us!");
});
```