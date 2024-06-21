'use client'
import React, {useRef, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './gallery.module.scss';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMorePhotos, setHasMorePhotos] = useState(true);

    const fetchMorePhotos = () => {
        const pathToPhotos = '/photos';
        const photosPerPage = 4;

        const newPhotos = Array.from({length: photosPerPage}, (_, index) => ({
            id: (page - 1) * photosPerPage + index,
            src: `${pathToPhotos}/photo${(page - 1) * photosPerPage + index}.jpg`,
        }));

        setPhotos([...photos, ...newPhotos]);
        setPage(page + 1);
        if (photos.length >= 16) {
            setHasMorePhotos(false);
        }
    };

    useEffect(() => {
        fetchMorePhotos();
    }, []);

    return (
        <>
            <h1 className='text-center fs-1 fw-bold'>Фотогалерея</h1>
            <div className="container">
                <div className="row">
                    {photos.map((photo) => (
                        <div key={photo.id} className={`col-md-3 mb-4`}>
                            <img src={photo.src} className={`${style.img}  img-fluid h-100`} alt={`Photo ${photo.id}`}/>
                        </div>
                    ))}
                </div>
                {hasMorePhotos && (
                    <div className="text-center">
                        <button className={`${style.button} `} onClick={fetchMorePhotos}>
                            Завантажити&nbsp;ще
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Gallery;
