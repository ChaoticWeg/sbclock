/**
 * Update the clock.
 */
function updateClock() {
    // grab a new Date object
    let now = new Date();

    // set hours and minutes
    displayNumber('.clock #hours', now.getHours());
    displayNumber('.clock #minutes', now.getMinutes());

    // flash separators
    toggleVisibility('.separator');
}

/**
 * Function called when document ready event is fired.
 * Performs first update, then schedules an update for every quarter-second.
 * This might drain battery and may be changed after some testing.
 */
function onReady() {
    updateClock();
    setInterval(updateClock, 500);
}

// register document ready handler
$(onReady);
