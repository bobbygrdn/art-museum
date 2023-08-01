import React from 'react';
import { Link } from 'react-router-dom';

export default function ArtImageTile({ art }) {

    console.log(art);
    return (
        <Link to={'/galleries/:galleryId/art/:artId'}>
            <img src={art.url} alt={art.title}></img>
        </Link>
    )
}
