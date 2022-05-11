import axios from "axios";
import React from "react";
import classes from './Users.module.css';

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => this.props.setUsers(response.data));
    }
    render = () => (
        <div>
            {this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img className={classes.userPhoto} src={user.imgUrl || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png'}></img>
                    </div>
                    <div>
                        {user.followed ? 
                        <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button> : 
                        <button onClick={() => {this.props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name} {user.lastName}</div>
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