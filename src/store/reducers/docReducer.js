const initState = {
    emailError: null,
    style: null
  };

const DocReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SEND_EMAIL_SUCCESS':
            console.log('send email success')
            return state
        case 'SEND_EMAIL_ERROR':
            console.log('send email error')
            console.log(action.err.message)
            return state
        case 'SEND_COST_SUCCESS':
            console.log('send cost success')
            return state
        case 'SEND_COST_ERROR':
            console.log('send cost error')
            console.log(action.err.message)
            return state
        case 'SEND_INSURE_SUCCESS':
            console.log('send insure success')
            return state
        case 'SEND_INSURE_ERROR':
            console.log('send insure error')
            console.log(action.err.message)
            return state
        case 'SEND_NOTI_SUCCESS':
            console.log('sent notification success')
            return state
        case 'SEND_NOTI_ERROR':
            console.log('send notification error')
            console.log(action.err.message)
            return state
        case 'SEND_TEL_SUCCESS':
            console.log('sent tel success')
            return state
        case 'SEND_TEL_ERROR':
            console.log('send notification error')
            console.log(action.err.message)
            return state
        default :
            return state
    }
}

export default DocReducer