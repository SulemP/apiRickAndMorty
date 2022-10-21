import '../Personaje/Personaje.css'

function Personaje ( {pers} ){

    const { id, name, image, episode, status } = pers 

    // console.log(episode)
    return (

        <center>

            <div 
            className="personaje"
            key={id}>
                <p className='personaje-name'>{name}</p>
                <img className='personaje-img' src={image} alt = 'Personaje'></img>

                <p className='personaje-sub'>El status del personaje es:</p>
                
                {/* <div className='personaje-episodios'>
                    {episode.map((episodio, index) => {
                        if(index < 2){
                            return (       
                                <p key={index}>{episodio}</p>  
                            )
                        }
                    })}
                </div> */}
                <div className='personaje-status'>
                    <p className = {status === "Alive"? "alive": status === "Dead"? "dead":"unknown"}>
                        {status}
                    </p>
                </div>
               
            </div>    
        </center>

    )
}

export { Personaje };