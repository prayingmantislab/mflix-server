const axios = require('axios')
// const config = require('config');
 
//create a function that calls the api and returns the data with axios
const getMovie = async (title) => {
  // const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${config.get("omdbKey")}`);
  const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=b18c7305`);
  
  return response.data;
}

console.log(getMovie('The Matrix'));

module.exports = getMovie;


