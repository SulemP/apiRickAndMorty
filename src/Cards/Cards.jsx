import { useState } from 'react'
import { useEffect } from 'react'

import '../Cards/Cards.css'

import { Personaje } from '../Personaje/Personaje'

function Cards () {
    
    const [personaje, setPersonaje] = useState ('')

    const urlApi = "https://rickandmortyapi.com/api/character"


    useEffect(() => {

        obtenerPersonajes()

    }, [])
    

    const obtenerPersonajes = async () => {
        try {
            const dataPersonajes = await fetch(urlApi)


            let personajes = await dataPersonajes.json()
            personajes = personajes.results
            setPersonaje(personajes)

            // console.log(personajes) 
            personaje.map((pers,index) =>{

                //  await fetch(epi.name)
                // obtenerNombres(epi)
                // console.log(typeof(epi))                   
                pers[index] = pers.name  
                console.log(index) 

                console.log(pers) 

            })

        } 
        catch (error) {    
        }

    }
    
    return(
        <section className='cards'>
            {personaje.length ?
                personaje.map((item, index) => {
                    return (
                        <Personaje 
                            key={index}
                            pers = {item}
                        />
                    )
                })
                : <></>
            }
        </section>
    )
}

export { Cards };