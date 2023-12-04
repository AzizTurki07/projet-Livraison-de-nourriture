import '../styles/MotDePasse.css';
 function MotDePasse()
{
return(
    <div className='mdp'>
        <h1>Nouveau mot de passe</h1>
        <p>Vos mots de passe doivent comporter 8 caractères minimum, dont au moins une lettre et un chiffre.</p>
        <label for="nvmdp">Nouveau mot de passe</label>
        <input type="password" class="form-control" id="nvmdp" />
        <label for="cmdp">Confirmer le nouveau mot de passe</label>
        <input type="password" class="form-control" id="cmdp" />
        <button type="button" class="btn btn-dark">Mettre a jour</button>
    </div>
);
}
export default MotDePasse;