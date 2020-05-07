import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects})=>{
    return(
        <div className="project-list">
           { projects && projects.map((project)=><ProjectSummary project = {project} key={project.id} />)}
        </div>
    )
}

export default ProjectList