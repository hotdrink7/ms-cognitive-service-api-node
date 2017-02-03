const cognitiveServices = require('cognitive-services');

const bingNewsSearch = cognitiveServices.bingNewsSearch({
    API_KEY: "cc301c543a044ff6b5f1f82fca2c86d3"
});
 
const parameters = {
    q: "microsoft",
    count: "10",
    offset: "0",
    mkt: "en-us",
    safeSearch: "Moderate"
};

bingNewsSearch.search({
        parameters
    })
    .then((response) => {
        console.log('Got response', response);
    })
    .catch((err) => {
        console.error('Encountered error making request:', err);
    });    