const getMovie = require( "./omdbService" );
const getMovies = require( "./omdbService" );
const getRecMovies = require( "./omdbService" );
describe('omdbService', () => { 
 
  it('should return a movie', async () => {
    const movie = await getMovie('The Matrix');
    expect(movie.Title).toBe('The Matrix');
  });



  
  it('should return collection of new movies', async () => {
    const newMovies = await getNewMovies();
    expect(newMovies).toBeInstanceOf(Array);
  });

  it('should return collection of recommended movies', async () => {
    const recMovies = await getRecMovies();
    expect(recMovies).toBeInstanceOf(Array);
  });

 })