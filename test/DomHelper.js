function createElementAndTestKeypress(event, element, key) {
    var spy = spyOnEvent(document, event);
    // Create input box and append it to the dom
    var input = $(element);
    $(document.body).append(input);

    // Focus input box
    input.focus();

    // Simulate keypress which should no longer trigger shortcutLoadItems
    simulateKeypress(key);

    // Clean up by removing input box
    input.remove();
}
