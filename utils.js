function onViewportEnter (element, callback) {
    if (isInViewport(element)) {
        if (!element._enteredViewport) {
            element._enteredViewport = true;
            callback(element);
        };
    }
};

function isInViewport (element) {
    var elementTop = element.getBoundingClientRect().top;
    var viewportHeight = window.innerHeight;
    return elementTop <= viewportHeight;
};