[![Build Status](https://travis-ci.org/jkup/shortcut.svg?branch=master)](https://travis-ci.org/jkup/shortcut)

Shortcut.js
========

A keyboard shortcut library, shortcut.js listens for common keyboard shortcuts and triggers custom events for you to use.

## Shortcuts and the events they trigger

 Shortcut  | Event Name
-----------|-----------
     j     | shortcutNextItem
     k     | shortcutPrevItem
     n     | shortcutNewItem
     o     | shortcutOpenItem
     /     | shortcutSearchItems
     .     | shortcutLoadItems
     ?     | shortcutShowHelp
     ←     | shortcutLeftArrow
     ↑     | shortcutUpArrow
     →     | shortcutRightArrow
     ↓     | shortcutDownArrow
 Backspace | shortcutBackspace
 Tab       | shortcutTab
 Return    | shortcutReturn
 Shift     | shortcutShift
 Escape    | shortcutEscape
 Space     | shortcutSpace

## Listening for an event
```js
document.addEventListener('shortcutNextItem', function() {
  // your code here
});
```

## Installation

With bower

    bower install shortcutjs

Or, just stick shortcut.js or shortcut.min.js in your project

## Contributing

Please review our contributing guidelines [here](CONTRIBUTING.md)

## Standardization

Most of the big web applications ( Facebook, Twitter ) have a handy set of keyboard shortcuts but there is no standardization amongst these sites. A shared library such as shortcut.js could help web applications share a common set of keyboard shortcuts.
