import React from "react";
import './UsersList.css';

export const UsersList = (props) => {
    console.log(props.state)

    const users = props.state.map(user => {
        return (
            <li key={user.cell} className="list-item">
               <div className="block-item">
                   <img src={user.picture.large} alt="user_photo" className="user-photo"/>
                   <div>
                       <p style={user.gender === "male" ? {color: "green"} : {color: "red"}}><span className="name">{user.name.title}</span>&nbsp;<span
                           className="name">{user.name.first}</span>&nbsp;<span className="name">{user.name.last}</span>
                       </p>
                       <p>Email: <strong>{user.email}</strong></p>
                       <p>Płeć: <strong>{user.gender === "male" ? "Męzczyzna" : "Kobieta"}</strong></p>
                       <p>Tel: <strong>{user.phone}</strong></p>

                   </div>
               </div>
            </li>
        )
    })

    return (
        <ul className="list">
            {users}
        </ul>
    )
}
