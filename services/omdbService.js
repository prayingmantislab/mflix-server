const axios = require('axios')
const {MoviesResponse} = require('./types');
// const config = require('config');
 
//create a function that calls the api and returns the data with axios
const getMovie = async (title) => {
  // const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${config.get("omdbKey")}`);
  const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=b18c7305`);
  
  return response.data;
}


// create a function that calls the api and returns an array of new movies
const getNewMovies = async () => {
  const response = await axios.get(`https://www.omdbapi.com/?s=top%20gun&y=2022&apikey=b18c7305`);
  return response.data.Search;
}
// creare a function that calls the api and returns an array of recomended  movies
const getRecMovies = async () => {
  const response = await axios.get(`https://www.omdbapi.com/?s=dune&type=movie&apikey=b18c7305`);
  return response.data.Search;
}

console.log(getMovie('The Matrix'));
console.log(getNewMovies());
console.log(getRecMovies());

module.exports = getMovie;


