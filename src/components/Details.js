import React from 'react'
import { useParams } from 'react-router-dom'

function Details({ List }) {
    const {id} = useParams()
    const idMovie = Number(id)
    const found = List.find((elm) => elm.id === idMovie)
   

    return (
        <div>
            <h1>{found.name}</h1>
            <div class="card mb-3">
                <img src={found.image} class="card-img-top" alt={found.name} />
                <div class="card-body">
                    <h5 class="card-title">{found.name}</h5>
                    <p class="card-text">{found.description}</p>
                    <p class="card-text"><small class="text-muted">{found.rating}</small></p>
                    <div>
                        {found.trailer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details