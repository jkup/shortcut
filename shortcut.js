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

  var keyDownCodeMap = {
    8:   'shortcutBackspace',   // Backspace
    9:   'shortcutTab',         // Tab
    13:  'shortcutReturn',      // Return (enter)
    16:  'shortcutShift',       // Shift
    27:  'shortcutEscape',      // Escape
    32:  'shortcutSpace',       // Space
    37:  'shortcutLeftArrow',   // Left Arrow
    38:  'shortcutUpArrow',     // Up Arrow
    39:  'shortcutRightArrow',  // Right Arrow
    40:  'shortcutDownArrow',   // Down Arrow
  };

  var eventBlacklist = {
    'input': true,
    'textarea': true,
    'select': true
  };

  var pressHandler = function(e) {
    var tagName = document.activeElement.tagName.toLowerCase();
    var shortcut = keyCodeMap[e.keyCode] || keyDownCodeMap[e.keyCode];
    var shortcutEvent;

    if ( typeof shortcut === undefined || eventBlacklist[tagName]) {
        return;
    }

    if (window.CustomEvent) {
        shortcutEvent = new CustomEvent(shortcut);
    } else {
        shortcutEvent = document.createEvent('CustomEvent');
        shortcutEvent.initCustomEvent(shortcut, false, false, null);
    }

    document.dispatchEvent(shortcutEvent);
  };

  document.addEventListener('keypress', pressHandler);
  document.addEventListener('keydown',  pressHandler);
})();
