export const sendEmail = (detail) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('orders').add({
            ...detail,
            createAt: new Date()
        }).then(() => {
            return firestore.collection('branchs').doc()
        }).then(() => {
            dispatch({ type: 'SEND_EMAIL_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SEND_EMAIL_ERROR', err })
        })
    }
}