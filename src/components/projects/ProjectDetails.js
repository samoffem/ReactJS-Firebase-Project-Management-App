import React from 'react'
import './projects.css'

const ProjectDetails =(props)=> {
    const id = props.match.params.id
    return (
        <div className="project-details">
            <div className="content">
                <span className="title">Poject Title -{id}</span>
                <p>lorem ipsum gibberish that imyself cannot understand. so bear with me until i have real
                    data to populate this with. All the same, what im trying to tell you is that, there is
                    absolutely nothing wrong with me. Thank you for sparing me your time to read my nonsense.
                </p>
            </div>
            <div className="details gray">
                <div>Posted by Samuel Offem</div>
                <div>6th, May 2020, 9am</div>
            </div>
            
        </div>
    )
}

export default ProjectDetails
