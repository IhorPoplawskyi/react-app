import React from "react";
import classes from './Users.module.css';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
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
                        <img className={classes.userPhoto} src={user.imgUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png'}></img>
                    </div>
                    <div>
                        {user.followed ? 
                        <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : 
                        <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name} {user.username}</div>
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