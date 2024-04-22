import React from "react";

const UserCard = (props) => {
    console.log(props.data);
    return <div className="user-card">
        <img src={props.data.picture.medium} alt="" className="user-img"/>
        <p>{props.data.name.title} {props.data.name.first} {props.data.name.last}</p>
        <p>{props.data.phone}</p>
        <p>{props.data.location.state}, {props.data.location.country}</p>
    </div>
}

export default UserCard;