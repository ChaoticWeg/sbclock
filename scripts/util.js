/**
 * Toggle the visibility of the element, preserving its space in the layout.
 * @param {string} selector CSS selector of the element whose visibility we want to toggle.
 */
function toggleVisibility(selector) {
    let isHidden = $(selector).css('visibility') === 'hidden';
    let newState = isHidden ? 'visible' : 'hidden';
    $(selector).css('visibility', newState);
}
