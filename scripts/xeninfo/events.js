let EventRegistry = (() => {

    let exposed = {};

    // event handlers
    let handlers = {
        all: [],
        weather: [],
        statusbar: [],
        battery: [],
        reminders: [],
        events: [],
        music: [],
        system: [],
        alarm: []
    };

    /**
     * Register an event handler for the given type of events.
     * 
     * @param {string} type The type of events this handler will handle
     * @param {function} handler The event-handling function
     */
    exposed.register = (type, handler) => {
        if (!handlers.hasOwnProperty(type))
            throw Error(`unknown type: ${type}`);
        handlers[type].push(handler);
    }

    /**
     * Invoke all handlers registered for this type of event.
     * 
     * @param {string} type The type of event that is being invoked
     */
    exposed.invoke = (type) => {
        if (handlers.hasOwnProperty(type)) {
            _.forEach(handlers[type], h => h());
        }
    };

    exposed.handlers = (type) => handlers.hasOwnProperty(type) ? handlers[type].slice() : null;
    exposed.initDebug = () => { /* TODO */ };

    return exposed;

})();
