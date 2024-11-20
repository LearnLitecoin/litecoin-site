// This is a very basic Modernizr-like check for one feature
window.Modernizr = {
    touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch
};

console.log(Modernizr.touch ? 'This device supports touch events' : 'This device does not support touch events');
