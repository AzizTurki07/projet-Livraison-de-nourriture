
import '../styles/App.css';
import Info from './Info';
import Securite from './Securite';
import Acces from './Acces';
import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Nom from './Nom';
import NumTel from './NumTel';
import AdrMail from './AdrMail';
import 'bootstrap/dist/css/bootstrap.min.css';
import MotDePasse from './MotDePasse';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
<Route path="/" element={<RootLayout/>}>
  <Route index element={<Info/>}/>
    <Route path="Nom" element={<Nom/>}/>
    <Route path="NumTel" element={<NumTel/>}/>
    <Route path="AdrMail" element={<AdrMail/>}/>  
    <Route path="Securite" element={<Securite/>}/>
    <Route path="MotDePasse" element={<MotDePasse/>}/>
    <Route path="Acces" element={<Acces/>}/>
</Route>
    )
    );
  return ( 

<div className="App">
  <header className='entete'>
    <div className='compte'>Compte</div>
  </header>
  <div className='lmj-layout-inner'>
    
    <RouterProvider router={router}/> 
  </div>
</div>

  );
}

export default App;
