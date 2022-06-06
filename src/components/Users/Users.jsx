import axios from "axios";
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
                            props.toogleInProgress(true, user.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                            {
                                withCredentials: true,
                                headers: {'API-KEY' : 'e2c3b74f-5822-49ff-8ad1-b2c4ddfc80a9'}
                            })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(user.id);
                                }
                                props.toogleInProgress(false, user.id);
                            })
                        }}>Unfollow</button> : 
                        <button disabled={props.inProgress.some(el => el === user.id)} onClick={() => {
                            props.toogleInProgress(true, user.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                            {}, 
                            {
                                withCredentials: true,
                                headers: {'API-KEY' : 'e2c3b74f-5822-49ff-8ad1-b2c4ddfc80a9'}
                            })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(user.id);
                                }
                                props.toogleInProgress(false, user.id)
                            })
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                    </span>
                 </span>
            </div>)}
        </div>
    )
}

export default Users;