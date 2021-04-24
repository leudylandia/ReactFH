import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './index.css'

const GiftExpertApp = () => {

    
    const [categories, setCategories] = useState(['One Punch']);


    return(
        <div>
            <h2>Meme app</h2>
            <AddCategory setCategories ={setCategories}/>
            <hr/>


            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                            />
                        // return <li key={category}>{category}</li>
                    ))
                }
            </ol>
        </div>
    );
}

export default GiftExpertApp