'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    var led = $('#led');
    setInterval(function() {
        led.turnOn();

        var r = Math.random() * 255;
        var g = Math.random() * 255;
        var b = Math.random() * 255;
        led.setRGB(r, g, b);
        console.log("led should go on");
    }, 200);
});

$.end(function () {
    $('#led').turnOff();
});
