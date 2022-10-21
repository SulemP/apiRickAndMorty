import RYM from '../images/rick.png'
import './Header.css'

function Header () {
    return (
        <div className="header">
            <center>
                <img src={RYM} alt="Rick & Morty"></img>
            </center>
        </div>
    )
}

export { Header };