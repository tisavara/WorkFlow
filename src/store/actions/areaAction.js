export const areaAction = (areas) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('area').add({
            ...areas,
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'ADDAREA_SUCCESS', areas})
        }).catch((err) => {
            dispatch({type: 'ADDAREA_ERROR', err})
        })
    }
}

export const deleteArea = (areaid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('area').doc(areaid).delete().then(() => {
            dispatch({ type: 'DELETEAREA_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'DELETEAREA_ERROR', err })
        })
    }
}