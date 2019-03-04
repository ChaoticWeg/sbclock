/**
 * Toggle the visibility of the element, preserving its space in the layout.
 * @param {string} selector CSS selector of the element whose visibility we want to toggle.
 */
function toggleVisibility(selector) {
    let isHidden = $(selector).css('visibility') === 'hidden';
    let newState = isHidden ? 'visible' : 'hidden';
    $(selector).css('visibility', newState);
}

/**
 * Fade one element out and fade another in when it's done.
 * @param {string} previous The CSS selector of the element to fade out
 * @param {string} next The CSS selector of the element to fade in
 */
function fadeInto(previous, next) {
    $(previous).fadeOut(() => {
        $(next).fadeIn();
    });
}

/**
 * Set the text of the given element to the number, zero-padded to meet the number of digits.
 * @param {string} selector The CSS selector of the element to display the number in
 * @param {number} number The number to display
 * @param {number?} digits The number of digits. Default: 2
 */
function displayNumber(selector, number, digits = 2) {
    let numText = number.toString();
    while (numText.length < digits)
        numText = '0' + numText;
    $(selector).text(numText);
}
