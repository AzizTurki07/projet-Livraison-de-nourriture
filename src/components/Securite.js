import { NavLink,Outlet } from 'react-router-dom';
import '../styles/Securite.css'

function Securite()
{
return(
    <div className="securite">
        <div className="sec">Sécurité</div>
        <h5 className='connexion'>Connexion à Uber</h5>
        <nav>
            <NavLink to="MotDePasse">
        <div>
            <div className='mot'>Mot de passe</div>
            <p>Changer votre mot passe</p>
        </div>
        </NavLink></nav>
        <div>
            <div className='mot'>Clés d'accès</div>
            <p>Les clés d'accès sont plus simples et plus sûres que les mots de passe.</p>
        </div>
        
        <main>
             <Outlet/>
         </main>
    </div>
)



}
export default Securite;