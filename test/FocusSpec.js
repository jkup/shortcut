describe("test keypress events when browser is focused", function() {
    it("tests that the period key was ignored due to focus on input", function() {
        createElementAndTestKeypress('shortcutLoadItems', '<input>', '.');
        expect('shortcutLoadItems').not.toHaveBeenTriggeredOn(document);
    });

    it("tests that the period key was ignored due to focus on textarea", function() {
        createElementAndTestKeypress('shortcutLoadItems', '<textarea>', '.');
        expect('shortcutLoadItems').not.toHaveBeenTriggeredOn(document);
    });

    it("tests that the period key was ignored due to focus on select", function() {
        createElementAndTestKeypress('shortcutLoadItems', '<select>', '.');
        expect('shortcutLoadItems').not.toHaveBeenTriggeredOn(document);
    });

    it("tests that the period key was triggered due to focus on anchor", function() {
        createElementAndTestKeypress('shortcutLoadItems', '<a>', '.');
        expect('shortcutLoadItems').toHaveBeenTriggeredOn(document);
    });

    it("tests that the period key was triggered due to focus on button", function() {
        createElementAndTestKeypress('shortcutLoadItems', '<a>', '.');
        expect('shortcutLoadItems').toHaveBeenTriggeredOn(document);
    });
});
