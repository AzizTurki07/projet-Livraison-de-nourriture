import { useState } from "react";

function NumTel()
{ const [num,setNum] = useState('+216 94 827 584');

const handleChange = (event) => {
  setNum(event.target.value);
};
    return(
        <div>
            <h1>Numéro de téléphone</h1>
            <label for="num">changer votre numéro</label><br/>
            <input type="text" id="num" class="form-control" value={num} onChange={handleChange} /><br/>
            <button class="btn btn-dark">Mettre à jour</button>
        </div>
    )
}
export default NumTel;