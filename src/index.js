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

    var lcd = $('#lcd1602');
    lcd.cursorOff();
    lcd.blinkOff();
    lcd.turnOn();

    lcd.setCursor(0, 0);

    lcd.setCursor(6, 0);
    lcd.print('CHEN');
    lcd.setCursor(3, 1);
    lcd.print('I LOVE YOU');
});

$.end(function () {
    $('#buzzer').turnOff();
    $('#lcd1602').turnOff();
});
