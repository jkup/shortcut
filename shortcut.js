;(function() {

  document.addEventListener('keypress', function(e) {

    var shortcut = {
      46:  'shortcutLoadItems',   // .
      47:  'shortcutSearchItems', // /
      106: 'shortcutNextItem',    // j
      107: 'shortcutPrevItem',    // k
      110: 'shortcutNewItem',     // n
      111: 'shortcutOpenItem',    // o
    }[e.keyCode];

    if ( typeof shortcut === undefined ) {
      return;
    }

    if (window.CustomEvent) {
      var event = new CustomEvent(shortcut);
    } else {
      var event = document.createEvent(shortcut);
      event.initCustomEvent(shortcut, true, true);
    }

    document.dispatchEvent(event);

  });

})();
