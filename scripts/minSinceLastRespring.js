/**
 * Update the number of minutes since the last respring (since the document was first ready).
 * @param {Date} initial Date object first created when document was ready
 */
function updateMin(initial) {
    // get difference between initial date and current date
    let diff = new Date(new Date() - initial);
    let min = diff.getMinutes();

    // fade into "x minutes since last respring" after 1 minute
    if (min >= 1 && $('.justRespringed').is(':visible')) {
        fadeInto('.justRespringed', '.respringMin');
    }

    // update respring minutes text
    $('#respringMin').text(min);

    // should this be plural?
    let plurality = min == 1 ? '' : 's';
    $('#respringMinPlural').text(plurality);
}

/**
 * Function called when document ready event is fired.
 * Sets initial date, performs first update, and schedules a new update every 10 seconds.
 */
function onReady() {
    // set initial date to now
    let initialDate = new Date();

    // first update
    updateMin(initialDate);

    // schedule 1 update every 10 seconds
    setInterval(updateMin, 10000, initialDate);
}

// register document ready handler
$(onReady);
