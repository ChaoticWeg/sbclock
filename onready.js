$(() => {

    Clock.init();
    Tagline.init();

    EventRegistry.initDebug();
    SystemEvents.setup();
    BatteryEvents.setup();

});
