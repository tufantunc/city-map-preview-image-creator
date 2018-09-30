const geoCodeHelper = require('../geoCodeHelper');

describe('geoCodeHelper when called with', () => {
    test('right parameters, should return city geo code', async (done) => {
        const cityGeoCode = await geoCodeHelper('istanbul', 'Turkey', 'tr_TR');
        expect(cityGeoCode).toMatchSnapshot();
        done();
    });
    test('no parameters, should throw error', async (done) => {
        const testError = new Error('Wrong parameters!');
        expect(geoCodeHelper()).rejects.toEqual(testError);
        done();
    });
});