import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

const GiffGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            <hr/>
            <p>{loading && 'Cargando...'}</p>
            <div className='card-grid animate__animated animate__fadeIn '>
                {images.map(img => <GifGridItem key={img.id} {...img}/>)}
            </div>
        </>
    );
};

GiffGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GiffGrid;
