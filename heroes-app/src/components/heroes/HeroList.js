import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    //Para que no se vuela a llamar solo en caso cuando el publisher cambie
    const heroe = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    //const heroe = getHeroesByPublisher(publisher);
    
    return (
        <div className="row animate__animated animate__flipInX">
          {
                heroe.map(hero => (
                    //console.log(hero)
                    <HeroCard className=""
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
        
    )
}
