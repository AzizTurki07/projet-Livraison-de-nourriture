import { NavLink,Outlet } from 'react-router-dom';
import profilePic from '../profilePic.png'
import '../styles/Info.css'
function Info ()
{
return(
<div className="info">
    <div className='inf'>Informations sur le compte</div>
    <div><img src={profilePic} alt='profile Picture' className="picture"></img></div>
    <h5>Informations essentielles</h5>
    <div className='infoEs'>
        <nav>
            <NavLink to="Nom">
    <div>
        <div>Nom</div>  
            <div><p>turki med aziz</p></div>
        </div>
        </NavLink>
        <NavLink to="NumTel">
        <div>
        <div>Numéro téléphone</div>  
            <div><p>+216 94 827 584</p></div>
        </div>
        </NavLink>
        <NavLink to="AdrMail">
        <div>
        <div>Adresse e-mail</div>  
            <div><p>torkich7@gmail.com</p></div>
        </div>
        </NavLink>
        </nav>
        </div>
        <main>
             <Outlet/>
         </main>
            </div>

)
}
export default Info;