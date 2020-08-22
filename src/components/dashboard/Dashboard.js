import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import './dashboard.css'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component{
    render() {
        return(
            <div className="dashboard-container">
                <main>
                    <ProjectList projects = {this.props.projects} />
                </main>
                <aside>
                    <Notification /> 
                </aside>
            </div>
        )
    }
    
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)