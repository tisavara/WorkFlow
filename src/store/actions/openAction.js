export const OpenAction = (branchs) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        const authorId = getState().firebase.auth.uid
        firestore.collection('branchs').add({
            Area: branchs.Area,
            Vice: branchs.Vice,
            Users: {
                Id: authorId,
                UserName: branchs.UserName
            } ,
            Address: {
                Address1: branchs.All,
                Address2: 'ต.' + branchs.Address.d + ' ' + 'อ.' + branchs.Address.a + ' ' + 'จ.' + branchs.Address.p + ' ' + branchs.Address.z
            },
            Branch: {
                createAt: new Date(),
                Name: branchs.name,
                Code: branchs.code,
                Field: branchs.field,
                Employer: branchs.employer,
                Type: branchs.type,
                Deposit: branchs.deposit.label,
                Limit: branchs.limit,
                Cost: branchs.cost,
                Bank: branchs.bank,
                Distance: branchs.distance
            }
        }).then(() => {
            dispatch({type: 'OPEN_SUCCESS', branchs})
        }).catch((err) => {
            dispatch({type: 'OPEN_ERROR', err})
        })
    }
} 

export const deletebranch = (branchid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('close').add({
            close: new Date(),
            open: branchid.openDate,
            name: branchid.Name,
            cost: branchid.Cost,
            business: branchid.Business,
            address: branchid.Address,
            users: branchid.User
        }).then(() => {
            return firestore.collection('branchs').doc(branchid.Id).delete()
        }).then(() => {
            dispatch({ type: 'DELETEBRANCH_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'DELETEBRANCH_ERROR', err })
        })
    }
}