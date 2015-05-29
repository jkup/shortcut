function simulateKeypress(key) {
  var charCode = key.toLowerCase().charCodeAt();
  var event = document.createEvent('Event');
  event.charCode = charCode;
  event.initEvent('keypress');
  document.dispatchEvent(event);
}
