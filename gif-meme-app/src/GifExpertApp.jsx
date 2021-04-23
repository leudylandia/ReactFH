import React, {useState} from 'react'
import './index.css'

const GiftExpertApp = () => {

    const api_key = 'mL9uPpnCLyFzRM088aWh28GzW2v9pOqw';
    const [categories, setCategories] = useState(['One Punch', 'Samurai x', 'Dragon Ball']);

    const handleAdd = () =>{
        setCategories([...categories, 'Hunter']); //Una manera
        setCategories(cast => [...categories, 'Hunter']); //Otra manera
    }

    return(
        <div>
            <h2>Meme app</h2>
            <hr/>

            <button onClick={handleAdd}>Add</button>

            <ol>
                {
                    categories.map(item =>{
                        return <li key={item}>{item}</li>
                    })
                }
            </ol>
        </div>
    );
}

export default GiftExpertApp