const initState = {
    openError: null,
    style: null
}

const OpenReducer = (state = initState, action) => {
    switch (action.type){
        case 'OPEN_SUCCESS':
            console.log('open branch success')
            return {
                ...state,
                openError: 'Successful'
            }
        case 'OPEN_ERROR':
            console.log('open branch error')
            console.log(action.err.message)
            return state
        case 'DELETEBRANCH_SUCCESS':
            console.log('delete branch success')
            return state
        case 'DELETEBRANCH_ERROR':
            console.log('delete branch error')
            console.log(action.err.message)
            return state
        default:
            return state
    }
}

export default OpenReducer