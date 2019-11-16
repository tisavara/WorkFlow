const initState = {
    projects: ''
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project',action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state
        case 'DELETEPROJECT_SUCCESS':
            console.log('delete project success')
            return state
        case 'DELETEPROJECT_ERROR' :
            console.log('delete project error')
            console.log(action.err.message)
            return state
        case 'UPDATEPROJECT_SUCCESS':
            console.log('update success')
            return state
        case 'UPDATEPROJECT_ERROR':
            console.log('update error')
            console.log(action.err.message)
            return state
        default:
            return state 
    }
}

export default projectReducer