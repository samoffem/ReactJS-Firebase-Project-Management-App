import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import './dashboard.css'

class Dashboard extends Component{
    render() {
        return(
            <div className="dashboard-container">
                <main>
                    <ProjectList />
                </main>
                <aside>
                    <Notification /> 
                </aside>
            </div>
        )
    }
    
}

export default Dashboard