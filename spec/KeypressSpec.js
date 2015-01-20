describe("test keypress events", function() {
    it("tests that the period key was pressed", function() {
        var spy = spyOnEvent(document, 'shortcutLoadItems');
        simulateKeypress('.');
        expect('shortcutLoadItems').toHaveBeenTriggeredOn(document);
    });

    it("tests that the forward slash key was pressed", function() {
        var spy = spyOnEvent(document, 'shortcutSearchItems');
        simulateKeypress('/');
        expect('shortcutSearchItems').toHaveBeenTriggeredOn(document);
    });

    it("tests that the j key was pressed", function() {
        var spy = spyOnEvent(document, 'shortcutNextItem');
        simulateKeypress('j');
        expect('shortcutNextItem').toHaveBeenTriggeredOn(document);
    });

    it("tests that the k key was pressed", function() {
        var spy = spyOnEvent(document, 'shortcutPrevItem');
        simulateKeypress('k');
        expect('shortcutPrevItem').toHaveBeenTriggeredOn(document);
    });

    it("tests that the n key was pressed", function() {
        var spy = spyOnEvent(document, 'shortcutNewItem');
        simulateKeypress('n');
        expect('shortcutNewItem').toHaveBeenTriggeredOn(document);
    });

    it("tests that the o key was pressed", function() {
        var spy = spyOnEvent(document, 'shortcutOpenItem');
        simulateKeypress('o');
        expect('shortcutOpenItem').toHaveBeenTriggeredOn(document);
    });
});
