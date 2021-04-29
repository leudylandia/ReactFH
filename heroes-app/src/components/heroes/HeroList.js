import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroe = getHeroesByPublisher(publisher);
    
    return (
        <div className="card-columns">
            {
                heroe.map(hero => (
                    //console.log(hero)
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
        
    )
}
