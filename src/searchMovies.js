import React, {useState} from "react"

export default function SearchMovies() {
  
  //state - input query, movie
  const [query, setQuery] = useState('')
  //create the state for moives, and update that state appropriate
  const [movies, setMovies]  = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    // console.log("submitting")
    // const query = "Jurassic Park"
    // put your api key after api_key=
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c490eca3a808286f538900eaa14e47ad&language=en-US&query=${query}&page=1&include_adult=false`;
    
    try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results);
    setMovies(data.results)
    } catch(err) {
      console.err(err);
    }

  }

  
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input className="input" type="text"
         name="query" placeholder="i.e Lord Of The Ring" 
         value={query} onChange={(e) => setQuery(e.target.value)}
         />
        <button className="button" type="submit"> 
          Search
        </button>
      </form>
      <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <div className="card" key={movie.id}>
                    <img className="card--image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                        />
                </div>
            ))}
       </div>    
    </>

  )
}