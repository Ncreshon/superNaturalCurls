const axios = require('axios');
const config = require('./config/youtube.js');

let youtubeSearch = (query) => {
  const options = {
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    params: {
      part: 'snippet',
      key: config.YOUTUBE_API_KEY,
      q: query,
      maxResults: 10,
    }
  };

  return axios.get(options.url, options)
   
 


}

module.exports.youtubeSearch = youtubeSearch;