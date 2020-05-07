import React, { Component } from 'react'

class CreateProject extends Component {
    state= {
        title:"",
        content:""
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
                    <h1>Create Project</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-item">
                            <input type="text" id="title" placeholder="Title" onChange={this.handleChange}/>
                        </div>
                        <div className="form-item">
                            <textarea id="content" onChange={this.handleChange} />
                        </div>
                        <div className="button-panel">
                            <button>CREATE</button>
                        </div>
                    </form>   
                </div>
            </div>
            
        )
    }
}

export default CreateProject
