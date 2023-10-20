//gainer losser//
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://crypto-update-live.p.rapidapi.com/top-gainers-losers',
  headers: {
    'X-RapidAPI-Key': '5c7f4ca72dmsha827a9a9552b603p1a3ed5jsn535cb9759888',
    'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}