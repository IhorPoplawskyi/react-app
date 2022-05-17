import axios from "axios";
import React from "react";
import classes from './Users.module.css';

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(response => this.props.setUsers(response.data));
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPageAC(pageNumber);
        //axios.get('https://jsonplaceholder.typicode.com/users?page=${pageNumber}').then(response => this.props.setUsers(response.data));
        //тут я записав в строці запиту pageNumber, щоб отримувати саме ту потрібну нам сторінку, але у нас сервер не підтримує
        //такого запиту, тому він не працює. так само вказувати номер потрібно і в componentDidMount і брати його з
        //this.props.currentPage  + потрібно буде змінити в state при отриманні юзерів перезаписування нових старих юзерів на нових
        //так само на потрібно буде отримувати інфу від сервера про кількість юзерів і через редюсер, екшкріейтор передавати в стейт
    }
    render = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(el => {
                        return <span className={this.props.currentPage === el && classes.selectedPage} 
                        onClick={() => {this.onPageChanged(el)}}>{el}</span>}
                    )}
                </div>
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

}

export default Users;