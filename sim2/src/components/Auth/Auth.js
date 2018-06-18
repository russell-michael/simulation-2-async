import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './auth.css'
import logo from './logo.png';


export default class Auth extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
        
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    updateUsername(value){
        this.setState({
            username: value
        })
    }

    updatePassword(value){
        this.setState({
            password: value
        })
    }

    submitLogin(){
        axios.post('/api/auth/login', {username: this.state.username, password: this.state.password}).then(res => {
            if(res.status == 200){
                this.props.history.push(`/dashboard`)
            }
        }).catch(e => {
            console.log('nice try')
        })
    }

    render(){
        return(
                    <div className="auth_inner_middle">

                        <div className="auth_logo">
                        <img src={logo}/>
                            {/* <div className="logo">
                            LOGO
                            </div> */}
                        </div>
                        
                        <div className="auth_inputs">
                            <div className="auth_username">
                                <div><b>Username</b></div>
                                <input type="text" onChange={e => {this.updateUsername(e.target.value)}}/>
                            </div>
                            <div className="auth_username">
                                <div><b>Password</b></div>
                                <input type="text" onChange={e => {this.updatePassword(e.target.value)}}/>
                            </div>                            
                        </div>

                        <div className="auth_buttons">
                            <button className="login_button" onClick={this.submitLogin}>Login</button>
                            <button className="register_button">Register</button>
                        </div>

                    </div>
        )
    }


}