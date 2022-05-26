import React from "react";
import "./LandingPage.css"
import BadgeCard from "../components/BadgeCard/BadgeCard";
import { Link } from "react-router-dom";
import * as PATHS from "../utils/paths";
import { useEffect, useState } from "react";


const LandingPage = (props) => {
console.log("badges", props?.user?.bagde)

return (
<div className="landingPageBg">
    <section className="profileInfo">
        <h1>Bienvenid@ {props.user?.username}!</h1>
        <img className="profileLanding" src={props.user?.avatar}></img>
        <br/>
        <button className="profileImgButton">Cambiar foto de perfil</button>
    </section>
    {(props.user?.profile==="member")?(
    <>
        <section>
            
            <h2 className="profileInfo">Insignias</h2>
            <div className="badges">
            {props.user?.badge.map((badge, index)=>
            <BadgeCard key={index} badgeData={badge} />
            )}
            </div>
            <Link to={PATHS.TOMYBANCO}>
            <button className="landingButton">
                Canjear Insignias
            </button>
            </Link>

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