import React from "react";
import '../styles/RootLayout.css'
import { NavLink,Outlet } from "react-router-dom";
export default function RootLayout(){
    return(
        <div className="root-layout">
           <section>
                <nav>
                    <NavLink to="/">Informations sur le compte</NavLink>
                    <hr/>
                    <NavLink to="Securite">Sécurité</NavLink>
                    <hr/>
                    <NavLink to="Acces">Accès aux données</NavLink>
                    <hr/>
                </nav>
            </section>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}