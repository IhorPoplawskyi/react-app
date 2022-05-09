import React from "react";
import classes from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
        {id: 1, imgUrl: 'https://img.icons8.com/glyph-neue/2x/happy.png', firstName: 'Ihor', lastName: 'Poplawskyi', status: 'in work', location: 'Ukraine, Zhytomyr', followed: true},
        {id: 2, imgUrl: 'https://img.icons8.com/glyph-neue/2x/happy.png', firstName: 'Vova', lastName: 'Poplawskyi', status: 'surfing', location: 'Norway, Oslo', followed: true},
        {id: 3, imgUrl: 'https://img.icons8.com/glyph-neue/2x/happy.png', firstName: 'Jack', lastName: 'Smith', status: 'chilling', location: 'LA, USA', followed: false},
        {id: 4, imgUrl: 'https://img.icons8.com/glyph-neue/2x/happy.png', firstName: 'Sketch', lastName: 'Turner', status: 'in comix', location: 'NY, USA', followed: false},
    ])
    }
    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={user.imgUrl}></img>
                    </div>
                    <div>
                        {user.followed ? 
                        <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : 
                        <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.firstName} {user.lastName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;