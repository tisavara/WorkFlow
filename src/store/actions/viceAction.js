export const viceAction = (vices) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('vice').add({
            ...vices,
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'ADDVICE_SUCCESS', vices})
        }).catch((err) => {
            dispatch({type: 'ADDVICE_ERROR', err})
        })
    }
} 

export const deleteVice = (viceid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('vice').doc(viceid).delete().then(() => {
            dispatch({ type: 'DELETEVICE_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'DELETEVICE_ERROR', err })
        })
    }
}