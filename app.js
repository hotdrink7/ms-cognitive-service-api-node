var rp = require('request-promise');

var options = {
    method: 'GET',
    headers: {
    	'Host': 'api.cognitive.microsoft.com',
        'Ocp-Apim-Subscription-Key': 'cc301c543a044ff6b5f1f82fca2c86d3'
    },

    
    // ------ for Search
    // uri: 'https://api.cognitive.microsoft.com/bing/v5.0/search',
    // qs: {
    //         q: "microsoft",
		  //   count: "10",
		  //   offset: "0",
		  //   mkt: "en-us",
		  //   safeSearch: "Moderate"
    // }

    // ------ for news
	uri: 'https://api.cognitive.microsoft.com/bing/v5.0/news/'

};

rp(options)
    .then(function (parsedBody) {
        console.log(JSON.parse(parsedBody))
    })
    .catch(function (err) {
        throw err;
    });