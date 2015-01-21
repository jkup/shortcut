;(function() {

  var keyCodeMap = {
    46:  'shortcutLoadItems',   // .
    47:  'shortcutSearchItems', // /
    106: 'shortcutNextItem',    // j
    107: 'shortcutPrevItem',    // k
    110: 'shortcutNewItem',     // n
    111: 'shortcutOpenItem',    // o
  };

  document.addEventListener('keypress', function(e) {
    var shortcut = keyCodeMap[e.keyCode];
    var tagName = document.activeElement.tagName;

    if ( typeof shortcut === undefined || (tagName && tagName !== 'BODY' )) {
        return;
    }

    var shortcutEvent = document.createEvent('CustomEvent');
    shortcutEvent.initCustomEvent(shortcut, false, false, null);
    document.dispatchEvent(shortcutEvent);
  });

})();
