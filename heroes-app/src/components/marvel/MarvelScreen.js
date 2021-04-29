import React, { useState } from 'react'
import { heroes } from '../../data/heroes'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {

    return (
        <div className="container mt-2">
            <HeroList publisher={'Marvel Comics'}/>
        </div>
    )
}
