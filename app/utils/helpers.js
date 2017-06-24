var axios = require('axios');

var nytAPI = 'e0e01bf62f914a0c9331f4dd673a967a';

var helpers = {
	runQuery: function(searchTerm,beginDate,endDate) {

		var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + nytAPI + '&q=' + searchTerm; //+ '&begin_date=' beginDate + '&end_date=' + endDate;

		return axios.get(queryURL).then(function(results){

			console.log(results.data.response.docs);
			
			// parsedResponse = JSON.parse(response);
			// return parsedResponse;

			// console.log(response.data);
			// console.log(response.data.response.docs[0].headline.main)
			//formatted send the results back in a react-friendly way maybe?
			
			return results.data.response.docs;

		});
	}



};

module.exports = helpers;

