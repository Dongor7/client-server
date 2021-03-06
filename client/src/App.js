import React, { Component } from 'react';
import axios from 'axios';

import UserForm from './Components/Form';

import './App.css';

class App extends Component {
    state = {
        user: {
            email: '',
            password: ''
        },
        userList: null
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios
            .get('/users')
            .then(function (response) {
                this.setState({ userList: response});
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    addUser = async () => {

    };

render() {
    return (
        <div className="App">
            <UserForm/>
            <ul>
                {
                    /*this.state.userList.forEach((user) => {
                        return <li>Email: {user.email}, Password: {user.password}</li>
                    })*/
                }
            </ul>
        </div>
    );
}
}

export default App;
