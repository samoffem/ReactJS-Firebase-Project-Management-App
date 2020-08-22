import React from 'react'
import './projects.css'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails =(props)=> {
    const {project} = props

    if (project) {
        return (
            <div className="project-details">
                <div className="content">
                    <span className="title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className="details gray">
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>6th, May 2020, 9am</div>
                </div>
                
            </div>
        )
    }else {
        return (
            <div className="content">
                    <p>Loading...</p>
            </div>

        )
    }
    }
    

const mapStateToProps = (state, ownProps)=>{
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project
    }

}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)
