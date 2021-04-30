import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = (history) => {

    const params = useParams(); //Vamos a obtener los parametros que venga de la url
    const {heroeId} = params;

    //Para que no se vuela a llamar a menos que el heroeId cambie
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    //const hero = getHeroById(heroeId);
    
    //Por si no tiene hero
    if( !hero ){
        return <Redirect to="/"/>
    }
    
    const {superhero, publisher, alter_ego, first_appearance, characters } = hero;
    
    const handleBack = () =>{
        console.log(history.history); //Pude destructurarlo cuando lo recibo alla arriba pero quize hacerlo asi
        //history.history.goBack();

        //Esto es por si copian el link y lo pegan en otro navegador cuando le de para atras mandarlo a una pagina especifica ya que si le da para atras no aparecera nada
        if(history.history.length <= 2){
            history.history.push('/')
        }
        else{
            history.history.goBack();
        }
    }


    return (
        <div className="row mt-5 animate__animated  animate__lightSpeedInLeft">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`}
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: {alter_ego}</b>
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: {publisher}</b>
                    </li>
                    <li className="list-group-item">
                        <b>First apparance: {first_appearance}</b>
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-info"
                        onClick={handleBack}
                >Return</button>
                {/* Mala practica mia <Link to={publisher === 'DC Comics' ? '/dc' : '/marvel'} className="btn btn-outline-info">Return</Link> */}
            </div>
        </div>
    )
}
