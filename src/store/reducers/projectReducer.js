const initState = {
    projects:[
        {id:1, title: "Hadoop and its inconsistencies", content: "blah blah blah"},
        {id:2, title: "Big Data Analytics", content: "blah blah blah"},
        {id:3, title: "Javascript Arrays and Methods", content: "blah blah blah"}
    ]
}
const projectReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('project error', action.err)
            return state
        default:
            return state
    }
}

export default projectReducer