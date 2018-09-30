const puppeteer = require('puppeteer');
const createTemplate = require('./template');
const geoCodeHelper = require('./geoCodeHelper');
const { Cities } = require('./samplecities.json');

// options
const mapWidth = 300;
const mapHeight = 250;
const generalLanguage = 'tr_TR';
// end of options

puppeteer.launch({
    defaultViewport: {
        width: mapWidth,
        height: mapHeight
    }
}).then(async browser => {
    const total = Cities.length;
    let i = 0;
    for (city of Cities) {
        const cityName = encodeURI(city.name.toLowerCase());
        const cityData = await geoCodeHelper(cityName, city.country, generalLanguage);
        const page = await browser.newPage();
        const html = createTemplate({
            language: generalLanguage,
            zoom: 9,
            latitude: cityData.latitude,
            longitude: cityData.longitude
        });
        await page.setContent(html);
        await page.waitForSelector(".ymaps-2-1-68-map");
        await page.waitFor(1500); // wait for draw
        await page.screenshot({path: `mapshots/${city.name}.png`});
        await page.close();
        i++;
        console.log(`${total}/${i} - ${city.name} image created.`);
    }
    await browser.close();
});