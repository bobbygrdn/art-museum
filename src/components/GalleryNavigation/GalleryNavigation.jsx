import React from 'react';
import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

export default function GalleryNavigation({ galleries }) {

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to={'/'}>Home</NavLink>
            {galleries.map(gallery => {
                return <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.theme}</NavLink>
            })}
        </nav>
    )
}
