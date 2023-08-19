import logo from './logoMandaderos.png';
import './style.css'
function Header (){
    return(
    <div className='header'>
        <div className='container'>
            <img src={logo} className="logoMandaderos" alt='logo'/>
            <div className='navbar'>
                <ul className='navbar_nav'>
                    <li className='nav_item'>
                        INICIO
                    </li>
                    <li className='nav_item'>
                        QUIENES SOMOS
                    </li>
                    <li className='nav_item'>
                        SERVICIOS
                    </li>
                    <li className='nav_item'>
                        EQUIPO
                    </li>
                    <li className='nav_item'>
                        CONTACTANOS
                    </li>
                </ul>
            </div>

        
        </div>
    </div>
    
    )
}

export {Header};