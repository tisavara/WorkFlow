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
        default :
            return state
    }
}

export default DocReducer