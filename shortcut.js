;(function() {

  var keyCodeMap = {
    46:  'shortcutLoadItems',   // .
    47:  'shortcutSearchItems', // /
    63:  'shortcutShowHelp',    // ?
    106: 'shortcutNextItem',    // j
    107: 'shortcutPrevItem',    // k
    110: 'shortcutNewItem',     // n
    111: 'shortcutOpenItem',    // o
  };

  document.addEventListener('keypress', function(e) {
    var tagName = document.activeElement.tagName;
    var shortcut = keyCodeMap[e.keyCode];
    var shortcutEvent;

    if ( typeof shortcut === undefined || (tagName && tagName !== 'BODY' )) {
        return;
    }

    if (window.CustomEvent) {
        shortcutEvent = new CustomEvent(shortcut);
    } else {
        shortcutEvent = document.createEvent('CustomEvent');
        shortcutEvent.initCustomEvent(shortcut, false, false, null);
    }

    document.dispatchEvent(shortcutEvent);
  });

})();
