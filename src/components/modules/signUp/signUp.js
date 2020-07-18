import React from 'react';
import {
    Link
} from 'react-router-dom';

class SignUp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userFields: {

            }
        }
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSignUp(e) {
        e.preventDefault();
        const { userFields } = this.state;

        fetch('/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userFields)
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
                <form onSubmit={this.handleSignUp}>
                    <h1>
                        Sign Up
                    </h1>
                    <div className="login-field-container">
                        <label htmlFor="name">
                            Name:
                        </label>
                        <input name="name" value={userFields.loginEmail} required onChange={this.handleChange} />
                    </div>
                    <div className="login-field-container">
                        <label htmlFor="phoneNumber">
                            Phone Number:
                        </label>
                        <input name="phoneNumber"
                            maxlength="10"
                            minlength="10"
                            pattern="^\d{10}$"
                            value={userFields.loginEmail} required onChange={this.handleChange} />
                    </div>
                    <div className="login-field-container">
                        <label htmlFor="loginEmail">
                            Email:
                        </label>
                        <input name="loginEmail" value={userFields.loginEmail} type="email" required onChange={this.handleChange} />
                    </div>
                    <div className="login-field-container">
                        <label htmlFor="loginPassword">
                            Password:
                        </label>
                        <input type="password" value={userFields.loginPassword} name="loginPassword" onChange={this.handleChange} required />
                    </div>
                    <div className="login-forgot-password">
                        <Link to='/login'>
                            <p>
                                Already have an account:
                            </p>
                        </Link>
                    </div>
                    <div className="login-field-container">
                        <input type="submit" value="Sign Up"  className="main-button" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
