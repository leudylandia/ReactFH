import React, { useMemo } from 'react'
import { heroes } from '../../data/heroes'
import { useInputForm } from '../../hooks/useInputForm';
import { HeroCard } from '../heroes/HeroCard';
import { queryString } from 'query-string'
import { useLocation } from 'react-router';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    //const { q = '' } = queryString.parse(location.search);

    

    const initialForm = {
        search: ''
    }
    //Customer Hooks
    const [formValue, handleInputChange, reset] = useInputForm(initialForm);

    const {search} = formValue;

    // const heroesFiltered = heroes; //Data
     const heroesFiltered = getHeroByName(search);

    //const heroesFiltered = useMemo(() => getHeroByName(q), [q])

    const handleSubmit = (e) =>{
        e.preventDefault();

        history.push(`?q=${search}`)

        reset();
    }

    // console.log(search)

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Find your hero"
                            name='search'
                            value={search}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                                className="btn m-1 btn-block btn-outline-primary"
                                onClick={handleSubmit}>
                                Search...
                            </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                     {/* DEBO PONER UN ENLACE EN LA BARRA DEL MENU PARA LLEGAR A ESTE COMPONENTE
                         TAMBIEN DEBO IMPLEMENTAR PARA CAPTURAR EL SUBMIT DEL FORM 
                         SI QUIERO PUEDO USAR EL CUSTOM HOOK, LO HARE ASI PARA APRENDER*/}
                    {
                        heroesFiltered.map(hero => (
                           
                            <HeroCard 
                                key={hero.id}
                                // hero={hero} asi no funciona
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
