import React, { Component } from 'react'
import './auth.css'

class SignIn extends Component {
    state= {
        email:"",
        password:""
    }


    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="form-container">
                <div className="form-wrapper">
                    <h1>Sign In</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-item">
                            <input type="email" id="email" required="required" placeholder="Email Address" onChange={this.handleChange}/>
                        </div>
                        <div className="form-item">
                            <input type="password" id="password" required="required" placeholder="Password" onChange={this.handleChange} />
                        </div>
                        <div className="button-panel">
                            <button>SIGN IN</button>
                        </div>
                    </form>   
                </div>
            </div>
            
        )
    }
}

export default SignIn
