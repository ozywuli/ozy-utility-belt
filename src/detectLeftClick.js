/**
 * Detect a left mouse click
 */
let detectLeftClick = function(event) {
    event = event || window.event;
    if ('buttons' in event) {
        return event.buttons == 1;
    }
    let button = event.which || event.button;
    return button == 1;
}

export default detectLeftClick;
