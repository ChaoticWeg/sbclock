let BatteryEvents = (() => {

    let exposed = {};

    exposed.update = () => {
        let isCharging = batteryCharging ? "Charging" : "Not charging";
        $('#info-battery').text(`${isCharging} - ${batteryPercent}%`);
    };

    exposed.setup = () => {
        EventRegistry.register('battery', exposed.update);
    };

    return exposed;

})();
