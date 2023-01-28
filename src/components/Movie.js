import React from 'react'
import { Link } from 'react-router-dom'
import {Movies} from './Data'
import MovieCard from './MovieCard'
function Movie() {
    return (
        <div className='movie' >
            
            {Movies.map((ele, key) => <Link to={`/Details/${ele.id}`} key={ele.id}><MovieCard key={key} listMovie={ele}/></Link>)}
        </div>
    )
  
}

export default Movie