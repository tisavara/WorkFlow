export const sendEmail = (detail) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('orders').add({
            Cost: detail.Cost,
            branchId: detail.branchId,
            branchName: detail.branchName,
            business: detail.business,
            content: detail.content,
            createAt: new Date(),
            email: detail.email,
            name: detail.name
        }).then(() => {
            return firestore.collection('branchs').doc(detail.branchId).update({
                statusCost: 'noCost'
            })
        }).then(() => {
            dispatch({ type: 'SEND_EMAIL_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SEND_EMAIL_ERROR', err })
        })
    }
}

export const sendCost = (detail) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('orders').add({
            Cost: detail.Cost,
            branchId: detail.branchId,
            branchName: detail.branchName,
            business: detail.business,
            content: detail.content,
            createAt: new Date(),
            email: detail.email,
            name: detail.name
        }).then(() => {
            return firestore.collection('branchs').doc(detail.branchId).update({
                statusCost: 'sendCost'
            })
        }).then(() => {
            dispatch({ type: 'SEND_COST_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SEND_COST_ERROR', err })
        })
    }
}

export const costSuccess = (detail) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('branchs').doc(detail.ID).update({
            statusCost: detail.status
        }).then(() => {
            dispatch({ type: 'SEND_COST_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SEND_COST_ERROR', err })
        })
    }
}

export const notiCost = (detail) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notifications').add({
            content: " Open cost center " + detail.business + " " + detail.name ,
            time: new Date(),
            user: detail.user
        }).then(() => {
            dispatch({ type: 'SEND_NOTI_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SEND_NOTI_ERROR', err })
        })
    }
}

export const sendInsure = (detail) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('orders').add({
            ...detail,
            createAt: new Date()
        }).then(() => {
            return firestore.collection('branchs').doc(detail.branchId).update({
                statusInsure: 'Success'
            })
        }).then(() => {
            dispatch({ type: 'SEND_INSURE_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SEND_INSURE_ERROR', err })
        })
    }
}

export const sendTel = (detail) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('orders').add({
            Cost: detail.Cost,
            branchId: detail.branchId,
            branchName: detail.branchName,
            business: detail.business,
            content: detail.content,
            createAt: new Date(),
            email: detail.email,
            name: detail.name
        }).then(() => {
            return firestore.collection('branchs').doc(detail.branchId).update({
                statusTel: 'sendTel'
            })
        }).then(() => {
            dispatch({ type: 'SEND_TEL_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SEND_TEL_ERROR', err })
        })
    }
}

export const sendViceTel = (detail) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('orders').add({
            Cost: detail.Cost,
            branchId: detail.branchId,
            branchName: detail.branchName,
            business: detail.business,
            content: detail.content,
            createAt: new Date(),
            email: detail.email,
            name: detail.name
        }).then(() => {
            return firestore.collection('branchs').doc(detail.branchId).update({
                statusTel: 'Success'
            })
        }).then(() => {
            dispatch({ type: 'SEND_TEL_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SEND_TEL_ERROR', err })
        })
    }
}