import axios from "axios";

const BASEURL = "https://aliexpress-datahub.p.rapidapi.com/item_search" //"https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "f2eded35fdmshf1ac5b2777ca9aep1f8bc1jsn6ccfb8c682ee"; //"&api_key=SFEQg68V0VQioMoZ8JyMRKq6Sg9nsPtt&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    const options = {
      method: 'GET',
      url: BASEURL,
      params: {q: query, page: '1'},
      headers: {
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
      }
    };
    return axios.request(options);
  }
};
