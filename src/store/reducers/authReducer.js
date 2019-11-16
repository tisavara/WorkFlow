const initState = {
    authError: null,
    style: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: 'Register Complete',
                style: 'green-text center'
            }
        case 'SIGNUP_ERROR':
            console.log('signup error')
            console.log(action.err.message)
            return {
                ...state,
                authError: action.err.message,
                style: 'red-text center'
            }
        case 'DELETEMEM_SUCCESS':
            console.log('delete member success')
            return state
        case 'DELETEMEM_ERROR':
            console.log('delete member error')
            console.log(action.err.message)
            return state
        case 'EDITMEM_SUCCESS':
            console.log('edit member success')
            return state
        case 'EDITMEM_ERROR':
            console.log('edit member error')
            console.log(action.err.message)
            return state
        case 'UPDATEPROFILE_SUCCESS':
            console.log('edit profile success')
            return state
        case 'UPDATEPROFILE_ERROR':
            console.log('edit profile error')
            console.log(action.err.message)
            return state
        default:
            return state
    }
}

export default authReducer