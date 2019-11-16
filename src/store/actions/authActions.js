export const signIn = (credentials) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                Address1: newUser.Address1,
                Address2: 'ต.' + newUser.Address2.d + ' ' + 'อ.' + newUser.Address2.a + ' ' + 'จ.' + newUser.Address2.p + ' ' + newUser.Address2.z,
                id: resp.user.uid,
                email: newUser.email,
                title: newUser.titles.value,
                titleThai: newUser.titles.label,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                firstThai: newUser.firstThai,
                lastThai: newUser.lastThai,
                Id: newUser.password,
                position: newUser.position,
                tel: newUser.tel,
                status: newUser.status1,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

export const deletemem = (memid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        var user = firebase.auth().currentUser;
        const firestore = getFirestore()
        firestore.collection('users').doc(memid).delete().then(() => {
            return user.delete()
        }).then(() => {
            dispatch({ type: 'DELETEMEM_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'DELETEMEM_ERROR', err })
        })
    }
}

export const updatemem = (memid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('users').doc(memid.id).update({
            Id: memid.code,
            firstName: memid.newfirstName,
            firstThai: memid.newfirstThai,
            initials: memid.newfirstName[0] + memid.newlastName[0],
            lastName: memid.newlastName,
            lastThai: memid.newlastThai,
            position: memid.newposition,
            status: memid.status,
            tel: memid.newtel,
            title: memid.newtitles.value,
            titleThai: memid.newtitles.label,
            Address1: memid.Address1,
            Address2: memid.Address
        }).then(() => {
            dispatch({ type: 'EDITMEM_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'EDITMEM_ERROR', err})
        })
    }
}

export const updateProfile = (profileid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('users').doc(profileid.id).update({
            firstName: profileid.firstname,
            firstThai: profileid.firstThai,
            initials: profileid.firstname[0] + profileid.lastname[0],
            lastName: profileid.lastname,
            lastThai: profileid.lastThai,
            tel: profileid.tel,
            title: profileid.title.value,
            titleThai: profileid.title.label,
            Address1: profileid.Address1,
            Address2: profileid.Address
        }).then(() => {
            dispatch({ type: 'UPDATEPROFILE_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'UPDATEPROFILE_ERROR' })
        })
    }
}
