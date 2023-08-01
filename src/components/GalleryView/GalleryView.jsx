import React from 'react';
import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile';

export default function GalleryView({ galleries }) {

    const { galleryId } = useParams();

    const gallery = galleries.find(gallery => gallery.id === parseInt(galleryId));

    return (
        <div>
            <h1>Hello from GalleryView</h1>
            <h2>{gallery.name}</h2>
            {gallery.objects.map(artImage => {
                return <ArtImageTile key={artImage.id} art={artImage} />
            })}
        </div>
    )
}
