describe("Testing delayed alert function", () => {
    it("tests to see if it will display an alert after two seconds", () => {
        const result = delayedAlert();
        expect(result).toEqual(true);
    });
});