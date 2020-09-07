import React, {useState} from "react"

export default function SearchMovies() {
  
  //state - input query, movie
  const [query, setQuery] = useState('')

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting")
    const query = "Jurassic Park"
    // put your api key after api_key=yourapikey
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c490eca3a808286f538900eaa14e47ad&language=en-US&query=${query}&page=1&include_adult=false`;
    
    try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    } catch(err) {
      console.err(err);
    }

  }

  
  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input className="input" type="text"
       name="query" placeholder="i.e Lord Of The Ring" 
       value={query}
       />
      <button className="button" type="submit"> 
        Search
      </button>
    </form>

  )
}