;(function() {

  document.addEventListener('keypress', function(e) {

    var shortcut = {
      46:  'LoadItems',   // .
      47:  'SearchItems', // /
      106: 'NextItem',    // j
      107: 'PrevItem',    // k
      110: 'NewItem',     // n
      111: 'OpenItem',    // o
    }[e.keyCode];

    if ( typeof shortcut === undefined ) {
      return;
    }

    var shortcutEvent = 'shortcut' + shortcut;

    if (window.CustomEvent) {
      var event = new CustomEvent(shortcutEvent);
    } else {
      var event = document.createEvent(shortcutEvent);
      event.initCustomEvent(shortcutEvent, true, true);
    }

    document.dispatchEvent(event);

  });

})();
