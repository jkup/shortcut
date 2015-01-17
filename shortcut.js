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
    var shortcutEvent;

    if ( typeof shortcut === undefined ) {
      return;
    }

    if (window.CustomEvent) {
      shortcutEvent = new CustomEvent(shortcut);
    } else {
      shortcutEvent = document.createEvent(shortcut);
      shortcutEvent.initCustomEvent(shortcut, true, true);
    }

    document.dispatchEvent(shortcutEvent);
  });

})();
