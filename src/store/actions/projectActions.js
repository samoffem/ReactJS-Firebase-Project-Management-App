export const createProject = (project)=>{
    return (dispatch, getState, getFirebase)=>{
    
        return getFirebase()
         .firestore().collection('projects').add({
             ...project,
             authorFirstName: 'Samuel',
             authorLastName: 'Michael',
             authorId: 1234,
             createdAt: new Date()
         }).then(()=>{
            dispatch({type: 'CREATE_PROJECT', project})
         }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERR', err})
         })

        
    }
}