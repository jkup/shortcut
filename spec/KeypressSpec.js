describe("test keypress events", function() {
    it("tests that the period key was pressed", function() {
        spyOnEvent(document, 'shortcutLoadItems');

        var charCode = '.'.toUpperCase().charCodeAt();
        var e = jQuery.Event("keypress");
        e.which = charCode;
        $(document).trigger(e);

        expect('shortcutLoadItems').toHaveBeenTriggeredOnAndWith(document, { charCode: 46 });
    });
});
