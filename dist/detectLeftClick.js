'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Detect a left mouse click
 */
var detectLeftClick = function detectLeftClick(event) {
    event = event || window.event;
    if ('buttons' in event) {
        return event.buttons == 1;
    }
    var button = event.which || event.button;
    return button == 1;
};

exports.default = detectLeftClick;