import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({className})=>{
    return(
        <div className="project-list">
           <ProjectSummary />
           <ProjectSummary />
           <ProjectSummary />
           <ProjectSummary />
           <ProjectSummary />
        </div>
    )
}

export default ProjectList