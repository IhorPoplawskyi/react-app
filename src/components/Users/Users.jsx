import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Users.module.css';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    pagesCount = pagesCount > 30 ? pagesCount = 30 : pagesCount;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const defaultPhoto = 'https://www.clipartmax.com/png/middle/13-132360_size-admin-user-icon-png.png';
    return (
        <div>
            <div>
                {pages.map(el => {
                    return <span key={el} className={props.currentPage === el ? classes.selectedPage : classes.pagesCount} 
                    onClick={() => {props.onPageChanged(el)}}>{el}</span>}
                )}
            </div>
            {props.users.map(user => <div key={user.id}> 
                <span>
                    <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={classes.userPhoto} src={user.photos.small || defaultPhoto}></img>
                    </NavLink>
                    </div>
                    <div>
                        {user.followed ? 
                        <button disabled={props.inProgress.some(el => el === user.id)} onClick={() => {
                            props.follow(user.id)}}>Unfollow</button> : 
                        <button disabled={props.inProgress.some(el => el === user.id)} onClick={() => {
                            props.unfollow(user.id)}}>Follow</button>}
                    </div>
                </span>
                    <div>{user.name}</div>
            </div>)}
        </div>
    )
}

export default Users;