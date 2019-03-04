/**
 * Update the number of minutes since the last respring (since the document was first ready).
 * @param {Date} initial Date object first created when document was ready
 */
function updateMin(initial) {
    // get difference between initial date and current date
    let diff = new Date(new Date() - initial);
    let min = diff.getMinutes();

    // update respring minutes text
    $('#respringMin').text(min);

    // control plurality (minute vs minutes)
    if (min == 1) {
        // hide if 1 minute but it says "1 minutes"
        if ($('#respringMinPlural').is(':visible')) {
            $('#respringMinPlural').hide();
        }
    } else {
        // show if x minutes but it says "x minute"
        if (!$('#respringMinPlural').is(':visible')) {
            $('#respringMinPlural').show();
        }
    }
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
