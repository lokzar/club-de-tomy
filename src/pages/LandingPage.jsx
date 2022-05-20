import React from "react";
import "./LandingPage.css"

const LandingPage = (props) => {
return (
<div>
    <section className="profileInfo">
        <h1>Bienvenid@ {props.user?.username}!</h1>
        <img className="profileLanding" src={props.user?.avatar}></img>
        <p>cambiar foto de perfil</p>
    </section>
    {(props.user?.profile==="member")?(
        <>
            <section className="badges">
            <h2>!Insignias!</h2>
        </section>
        <section className="purchases">
            <h2>Compras pendientes</h2>
        </section>
        </>
    ):(
        <>
        <section>
            <h2>Buscar miembro del club</h2>
        </section>
        </>
    )}


</div>
);
};

export default LandingPage;