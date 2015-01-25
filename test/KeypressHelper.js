function simulateKeypress(key) {
    var keyCode = key.toLowerCase().charCodeAt();
    var event = document.createEvent('Event');
    event.keyCode = keyCode;
    event.initEvent('keypress');
    document.dispatchEvent(event);
}
