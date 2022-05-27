import React from "react";
import "./LandingPage.css"
import BadgeCard from "../components/BadgeCard/BadgeCard";
import { Link } from "react-router-dom";
import * as PATHS from "../utils/paths";
import { useEffect, useState } from "react";



const LandingPage = (props) => {
    const open=props.user?.purchase.filter(filtrado=>filtrado.isOpen===false&&filtrado.isPending===true)
    const sortPendig=open.sort(function compare(a, b) {
        var dateA = new Date(a.createdAt);
        var dateB = new Date(b.createdAt);
        return dateB - dateA;
        });
    const{setUser}=props
    const profilePic=[
        "https://res.cloudinary.com/dz29bpftp/image/upload/v1653607964/Club-Tomy/3382661_jsbawo.png",
        "https://res.cloudinary.com/dz29bpftp/image/upload/v1653607963/Club-Tomy/2319663_xxppde.png",
        "https://res.cloudinary.com/dz29bpftp/image/upload/v1653607963/Club-Tomy/3940403_yjkmz0.png",
        "https://res.cloudinary.com/dz29bpftp/image/upload/v1653607963/Club-Tomy/1759412_wxbfkg.png",
        "https://res.cloudinary.com/dz29bpftp/image/upload/v1653607963/Club-Tomy/194630_tqipst.png",
        "https://res.cloudinary.com/dz29bpftp/image/upload/v1653607963/Club-Tomy/194659_as1p7i.png",
        "https://res.cloudinary.com/dz29bpftp/image/upload/v1653607963/Club-Tomy/185848_l2tfwp.png",
        "https://res.cloudinary.com/dz29bpftp/image/upload/v1653607963/Club-Tomy/185826_k4k3bm.png"
    ]

    const randomProfile = (profilePicArr)=>{
        const randomPic = profilePicArr[Math.floor(Math.random() * profilePicArr.length)];
        return randomPic
    }
    const newPic=randomProfile(profilePic)



return (
<div className="landingPageBg">
    <section className="profileInfo">
        <h1>Bienvenid@ {props.user?.username}!</h1>
        <img className="profileLanding" src={props.user?.avatar}></img>
        <br/>
        <button onClick={()=>setUser({...props.user, avatar:newPic})} className="profileImgButton">Cambiar foto de perfil</button>
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
        <section >
            <h2>Compra pendiente</h2>
            <div className="purchases">
                <div className="pending">
                    <h4>Orden de compra:</h4>
                    <h4>{sortPendig[0]?._id}</h4>
                    <h3>Productos:</h3>
                    <h4>{sortPendig[0]?.product[0]?.name}</h4>
                    <img className="pendingImg" src={sortPendig[0]?.product[0]?.image}></img>
                    <h4>{sortPendig[0]?.product[1]?.name}</h4>
                    <img className="pendingImg" src={sortPendig[0]?.product[1]?.image}></img>
                    <h4>{sortPendig[0]?.product[2]?.name}</h4>
                    <img className="pendingImg" src={sortPendig[0]?.product[2]?.image}></img>
                    <h3 className="pendingtotal">Total: {sortPendig[0]?.total} Tomy Pesos</h3>
                    </div>
                </div>
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