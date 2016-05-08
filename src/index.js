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

    var dht11 = $('#dht11');

    setInterval(function() {
        var temperature = dht11.temperature;
        var humidityRelative = dht11.humidityRelative;
        console.log("temp: %d, humidity: %d",
                    dht11.temperature,
                    dht11.humidityRelative
                   );
    }, 1000);

});

$.end(function () {
   $('#buzzer').turnOff();
});
