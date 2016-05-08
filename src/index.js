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

    var dht11 = $('#dht11')
    var lcd = $('#lcd1602');
    lcd.cursorOff();
    lcd.blinkOff();
    lcd.turnOn();

    setInterval(function() {
        var tempStr     = "TEMP:" + dht11.temperature.toFixed(1);
        var humidityStr = "RH  :" + dht11.humidityRelative.toFixed(1);
        lcd.setCursor(0, 0);
        lcd.print(tempStr);
        lcd.setCursor(0, 1);
        lcd.print(humidityStr);

        console.log("temp: %d, humidity: %d",
                    dht11.temperature,
                    dht11.humidityRelative
                   );
    }, 1000);
});

$.end(function () {
    $('#buzzer').turnOff();
    $('#lcd1602').turnOff();
});
