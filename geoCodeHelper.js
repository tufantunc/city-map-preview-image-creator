const axios = require('axios');

async function getGeoCode(city, country, language) {
    if(!city || !country || !language) {
        throw new Error('Wrong parameters!');
    } else {
        return axios.get(`https://geocode-maps.yandex.ru/1.x/?geocode=${city},+${country}&lang=${language}&format=json`).catch(err => {
            console.log(err);
        }).then(response => {
            const cityLocal = response.data.response.GeoObjectCollection.featureMember.filter(GeoItem => GeoItem.GeoObject.metaDataProperty.GeocoderMetaData.kind === "locality" || GeoItem.GeoObject.metaDataProperty.GeocoderMetaData.kind === "province");
            const point = cityLocal[0].GeoObject.Point.pos.split(' ');
            return {
                city,
                country,
                language,
                latitude: point[1],
                longitude: point[0]
            }
        });
    }
}

module.exports = getGeoCode;