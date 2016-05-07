'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    var btn =    $('#button');
    var buzzer = $('#buzzer');

    btn.on('push', function() {
        console.log("button pushed");
        if (buzzer.isOn()) {
            buzzer.turnOff();
        } else {
            buzzer.turnOn();
        }

    });

    btn.on('release', function() {
        console.log("button released");
    });
});

$.end(function () {
   $('#buzzer').turnOff();
});
