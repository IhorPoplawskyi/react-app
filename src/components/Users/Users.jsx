import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Users.module.css';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const defaultPhoto = 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png';
    return (
        <div>
            <div>
                {pages.map(el => {
                    return <span key={el} className={props.currentPage === el ? classes.selectedPage : undefined} 
                    onClick={() => {props.onPageChanged(el)}}>{el}</span>}
                )}
            </div>
            {props.users.map(user => <div key={user.id}> 
                <span>
                    <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={classes.userPhoto} src={user.avatar || defaultPhoto}></img>
                    </NavLink>
                    </div>
                    <div>
                        {user.followed ? 
                        <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : 
                        <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.first_name} {user.last_name}</div>
                    </span>
                 </span>
            </div>)}
        </div>
    )
}

export default Users;