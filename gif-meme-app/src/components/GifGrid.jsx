import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    

    const {data:images, loading} = useFetchGifs(category); //data:images es para darle un nombre, en este caso le estoy dando el nombre de images
    console.log(images);
    console.log(loading);


    return (
        <div>
             <h3 className="animate__animated animate__fadeIn">{category}</h3>

           {loading && <p className="animate__animated animate__flash">Cargando...</p>}
        
            <div className="card-grid">
                {
                    images.map(image => (
                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </div>
    )
}
