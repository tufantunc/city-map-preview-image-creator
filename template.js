const createConfig = (options) => {
    options = options || {};
    return {
        language: options.hasOwnProperty('language') ? options.language : 'tr_TR',
        zoom: options.hasOwnProperty('zoom') ? options.zoom : 9,
        latitude: options.hasOwnProperty('latitude') ? options.latitude : "41.008857",
        longitude: options.hasOwnProperty('longitude') ? options.longitude : "28.96747"
    }
}
module.exports = (options) => {
    options = createConfig(options);
    return `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                    }
                    html, body {
                        width: 100%;
                        height: 100%;
                    }
                    #map {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                </style>
                <script src="https://api-maps.yandex.ru/2.1/?lang=${options.language}" type="text/javascript"></script>
                <script type="text/javascript">
                    ymaps.ready(init);
                    var myMap;

                    function init(){     
                        myMap = new ymaps.Map("map", {
                            center: [${options.latitude}, ${options.longitude}],
                            zoom: ${options.zoom},
                            controls: []
                        });
                    }
                </script>
            </head>
            <body>
                    <div id="map"></div>
            </body>
        </html>`;
};