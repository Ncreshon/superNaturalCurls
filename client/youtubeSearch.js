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
    .then((videos) => {
      console.log(videos.data)
    }).catch((err) => {
      console.error(err);
    })
  // TODO - Use the request module to request repos for a specific
  // user from the github API


  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL


}

module.exports.youtubeSearch = youtubeSearch;