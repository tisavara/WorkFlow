export const emailAction = (emailAction) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('email').doc(emailAction.id).update({
            emailAccount: emailAction.emailAccount,
            emailBoss: emailAction.emailBoss,
            emailInsure: emailAction.emailInsure,
            emailMiniboss: emailAction.emailMiniboss,
            emailSCB: emailAction.emailSCB,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'UPDATEEMAIL_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'UPDATEEMAIL.ERROR', err })
        })
    }
}