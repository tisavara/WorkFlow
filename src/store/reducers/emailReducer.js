const initState = {
    emailError: null,
    style: null
  };

const EmailReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATEEMAIL_SUCCESS':
            console.log('update email success')
            return state
        case 'UPDATEEMAIL.ERROR':
            console.log('update email error')
            console.log(action.err.message)
            return state
        default:
            return state
    }
}

export default EmailReducer