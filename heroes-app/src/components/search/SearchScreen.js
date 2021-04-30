import React from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const heroesFiltered = heroes;

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div class="col-5">
                    <h4>Search</h4>
                    <form>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Find your hero"
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary">
                                Search...
                            </button>
                    </form>
                </div>
                <div class="col-7">
                    <h4>Results</h4>
                    <hr/>
                     {/* DEBO PONER UN ENLACE EN LA BARRA DEL MENU PARA LLEGAR A ESTE COMPONENTE
                         TAMBIEN DEBO IMPLEMENTAR PARA CAPTURAR EL SUBMIT DEL FORM 
                         SI QUIERO PUEDO USAR EL CUSTOM HOOK, LO HARE ASI PARA APRENDER*/}
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                hero={hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
