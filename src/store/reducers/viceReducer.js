const initState = {
    viceError: null,
    style: null
}

const ViceReducer = (state = initState, action) => {
    switch (action.type){
        case 'ADDVICE_SUCCESS':
            console.log('added success')
            return {
                ...state,
                viceError: 'Complete',
                style: 'green-text center'
        }
        
        
        case 'ADDVICE_ERROR': 
            console.log('added error')
            console.log(action.err.message)
            return {
                ...state,
                viceError: action.err.message,
                style: 'red-text center'
            }

        case 'DELETEVICE_SUCCESS':
            console.log('delete vice success')
            return state

        case 'DELETEVICE_ERROR':
            console.log('delete vice error')
            console.log(action.err.message)
            return state

        default:
            return state 
    }
}

export default ViceReducer