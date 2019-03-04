let DeviceStatus = (() => {

    let exposed = {};

    // event handlers
    let handlers = {
        weather: [],
        statusbar: [],
        battery: [],
        reminders: [],
        events: [],
        music: [],
        system: [],
        alarm: []
    };

    exposed.register = (type, handler) => {
        if (!handlers.hasOwnProperty(type))
            throw Error(`unknown type: ${type}`);
        
        handlers[type].push(handler);
    };

    exposed.invoke = (type) => {
        if (handlers.hasOwnProperty(type)) {
            _.forEach(handlers[type], h => h());
        }
    };

    exposed.handlers = (type) => {
        if (handlers.hasOwnProperty(type))
            return handlers[type].slice();
    };

    return exposed;

})();
