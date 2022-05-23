import React from "react";

export const UsersList = (props) => {
    console.log(props.state)

    const users = props.state.map(user => <li key={user.cell}>{user.name.first}</li>)

    return (
        <ul>
            {users}
        </ul>
    )
}
