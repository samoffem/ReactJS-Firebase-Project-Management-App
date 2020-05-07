import React, { Component } from 'react'


class SignUp extends Component {
    state= {
        email:"",
        password:"",
        firstName:"",
        lastName:""
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
                    <h1>Sign Up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-item">
                            <input type="text" id="firstName" required="required" placeholder="First Name" onChange={this.handleChange} />
                        </div>
                        <div className="form-item">
                            <input type="text" id="lastName" required="required" placeholder="Last Name" onChange={this.handleChange} />
                        </div>
                        <div className="form-item">
                            <input type="email" id="email" required="required" placeholder="Email Address" onChange={this.handleChange}/>
                        </div>
                        <div className="form-item">
                            <input type="password" id="password" required="required" placeholder="Password" onChange={this.handleChange} />
                        </div>
                        <div className="button-panel">
                            <button>SIGN UP</button>
                        </div>
                    </form>   
                </div>
            </div>
            
        )
    }
}

export default SignUp
