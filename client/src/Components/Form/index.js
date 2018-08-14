import React, { Component } from 'react';
import axios from 'axios';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
});

class Form extends Component {

    state = {
        email: '',
        password: ''
    };

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.addUser();

        this.setState({
            email: '',
            password: ''
        })
    };

    addUser = () => {
        axios
            .post('/user', {
                email: this.state.email,
                password: this.state.password
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {

        const { classes } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                    />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChangePassword}
                    />
                </FormControl>

                <Button variant="contained" color="primary" onSubmit={this.handleSubmit}>
                    Add
                </Button>

            </form>
        )
    }

}

export default withStyles(styles)(Form);
