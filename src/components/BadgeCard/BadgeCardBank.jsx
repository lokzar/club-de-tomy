import {link} from 'react-router-dom'
import "../BadgeCard/BadgeCard.css"
import { Navigate, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import * as PATHS from "../../utils/paths";
import axios from "axios";

const BadgeCard = (props) => {
const {badgeData}=props
const {user}=props
//console.log(props)
//unAssign Badge
function unAssignBadge(_id, balance){
    axios.put(`http://localhost:5005/api/badge/value/${props.user?._id}`,{_id, balance})
    .then(()=>{
        const updatedBalance = props.user?.badge.filter(filtrado=>filtrado._id==_id)
        console.log(updatedBalance)
        //props.setUser({...props.user, balance:updatedBalance})
        //console.log(updatedBadge)
        axios.put(`http://localhost:5005/api/badge/delete/${props.user?._id}`,{_id})
        .then(badges=>{
        //console.log(badges)
        // console.log(props.user)

        const updatedBadge = props.user?.badge.filter(filtrados=>filtrados._id!=_id)
        //console.log(updatedBadge)
        const balance = props.user.balance + updatedBalance[0].value;
        props.setUser({...props.user, badge:updatedBadge, balance})
        })
    }
    )
.catch(err=>console.log(err))
}

return (
<div className='badgeCard'>
    <div className='badgeCardBankInfo'>
        <h3>{badgeData?.name}</h3>
        <img className='imgBadge' src={badgeData?.avatar}></img>
        <h4>Valor: <strong>{badgeData?.value}</strong> Tomy Pesos</h4>
        <button onClick={()=>unAssignBadge(badgeData?._id, user?.balance)} className='changeBadgeBtn'>Canjear</button>
    </div>
</div>
);
};

export default BadgeCard;