import React from 'react';
import { handleLogin } from '../../utils/commonFunctions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userFields: {

            },
            isLoggedIn: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        e.stopPropagation();
        const { userFields } = this.state;

        fetch(`/users/${userFields.loginEmail}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userFields)
        }).then(data => {
			return data.json();
        }).then(response => {
            if (response && response.token) {
                handleLogin({
                    nameValue: response.userId,
                    tokenValue: response.token
                });
                this.setState({
                    isLoggedIn: true
                })
            }
        })
    }

    handleChange(event) {
        const userFields = Object.assign({}, this.state.userFields, { [event.target.name]: event.target.value });
		this.setState({
			userFields
		});
    }

    render () {
        const { userFields } = this.state;

        return (
            <div className="login-container">
                <form onSubmit={this.handleLogin}>
                    <h1>
                        Login
                    </h1>
                    <div className="login-field-container">
                        <label htmlFor="loginEmail">
                            Email:
                        </label>
                        <input name="loginEmail"
                            value={userFields.loginEmail}
                            type="email" required onChange={this.handleChange}
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="login-field-container">
                        <label htmlFor="loginPassword">
                            Password:
                        </label>
                        <input type="password"
                            value={userFields.loginPassword}
                            name="loginPassword" required onChange={this.handleChange}
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="login-forgot-password">
                        <p>
                            Forgot Password:
                        </p>
                    </div>
                    <div className="login-field-container">
                        <input type="submit" value="Login" className="main-button" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
