import React from 'react'

const ProjectSummary = ({project})=>{
    return (
        <div className="post">
            <span>{project.title}</span>
            <p>Posted by Samuel Offem</p>
            <p className="gray">4th May 2020, 8pm</p>
        </div>
    )
}

export default ProjectSummary