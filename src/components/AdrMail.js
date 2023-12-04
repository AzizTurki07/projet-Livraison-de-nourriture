import { useState } from "react";

function AdrMail()
{ const [adr,setAdr] = useState('torkich7@gmail.com');

const handleChange = (event) => {
  setAdr(event.target.value);
};
    return(
        <div>
            <h1>Adresse e-mail</h1>
            <label for="adr">Personaliser votre experience</label><br/>
            <input type="text" id="adr" class="form-control" value={adr} onChange={handleChange} /><br/>
            <button class="btn btn-dark">Mettre à jour</button>
        </div>
    );
}
export default AdrMail;