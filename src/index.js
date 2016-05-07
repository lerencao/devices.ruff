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
        buzzer.turnOn();
    });

    btn.on('release', function() {
        console.log("button released");
         buzzer.turnOff();
    });
});

$.end(function () {
   $('#buzzer').turnOff();
});
