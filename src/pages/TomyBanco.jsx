import React from "react";
import axios from "axios";
import BadgeCardBank from "../components/BadgeCard/BadgeCardBank"
import {useState, useEffect} from "react";
import "./TomyBanco.css"

const TomyBanco = (props) => {
  //console.log(props)

  return (
    <div className="TomyBanco">
      <h1>Tomy Banco</h1>
      <h2>Tienes:</h2>
      <h3 className="saldo">${props.user.balance} <br/>Tomy Pesos</h3>
      <h2 className="profileInfo">Insignias</h2>
            <div className="badges">
            {props.user?.badge.map((badge, index)=>
            <BadgeCardBank key={index} badgeData={badge} user={props.user} setUser={props.setUser} />
            )}
            </div>
    </div>
  );
};

export default TomyBanco;
