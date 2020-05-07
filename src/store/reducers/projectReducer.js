<<<<<<< HEAD
const initState = [
    {id: 1, title: "Hadoop and its inconsistencies", content: "blah blah blah"},
    {id: 2, title: "Big data analytics Manipulation", content: "blah blah blah"},
    {id: 3, title: "Javascript arrays and methods", content: "blah blah blah"}
]

=======
const initState = {
    projects:[
        {id:1, title: "Hadoop and its inconsistencies", content: "blah blah blah"},
        {id:2, title: "Big Data Analytics", content: "blah blah blah"},
        {id:3, title: "Javascript Arrays and Methods", content: "blah blah blah"}
    ]
}
>>>>>>> redux
const projectReducer = (state = initState, action)=>{
    return state
}

export default projectReducer