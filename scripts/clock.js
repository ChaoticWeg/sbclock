let Clock = (() => {

    let exposed = {};

    /**
     * Update the clock.
     */
    let updateClock = () => {
        // grab a new Date object
        let now = new Date();

        // set hours and minutes
        Utils.displayNumber('.clock #hours', now.getHours());
        Utils.displayNumber('.clock #minutes', now.getMinutes());

        // flash separators
        Utils.toggleVisibility('.separator');
    }

    /**
     * Function called when document ready event is fired.
     * Performs first update, then schedules an update for every quarter-second.
     * This might drain battery and may be changed after some testing.
     */
    exposed.init = () => {
        updateClock();
        setInterval(updateClock, 500);
    }

    return exposed;

})();
