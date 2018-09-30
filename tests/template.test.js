const template = require('../template.js');

describe('template function', () => {
    it('should return page template', () => {
        const pageTemplate = template();
        expect(pageTemplate).toMatchSnapshot();
    });
});