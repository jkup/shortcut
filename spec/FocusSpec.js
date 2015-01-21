describe("test keypress events when browser is focused", function() {
    it("tests that the period key was ignored due to focus", function() {
        var spy = spyOnEvent(document, 'shortcutLoadItems');
        // Create input box and append it to the dom
        var input = $('<input>');
        $(document.body).append(input);

        // Focus input box
        input.focus();

        // Simulate keypress which should no longer trigger shortcutLoadItems
        simulateKeypress('.');
        expect('shortcutLoadItems').not.toHaveBeenTriggeredOn(document);

        // Clean up by removing input box
        input.remove();
    });
});
