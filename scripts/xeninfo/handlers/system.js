let SystemEvents = (() => {

    let exposed = {};

    /** Update device info on widget. */
    function onInvoked() {
        $('#info-device').text(deviceName || 'oops');
    }

    /** Register XenInfo handlers. */
    exposed.setup = () => {
        EventRegistry.register('system', onInvoked);
    };
    
    return exposed;

})();
