const samplecities = require('../samplecities.json');

describe('sample cities', () => {
    it('should have Cities property', () => {
        expect(samplecities.hasOwnProperty('Cities')).toBeTruthy();
    });

    it('Cities property must be an Array', () => {
        expect(Array.isArray(samplecities.Cities)).toBeTruthy();
    });
});