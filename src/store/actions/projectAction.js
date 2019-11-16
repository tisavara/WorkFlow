export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName ,
            authorLastName: profile.lastName ,
            authorId: authorId ,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })

    }
}

export const updateProject = (projectid) => {
    console.log(projectid)
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('projects').doc(projectid.newid).update({
            content: projectid.newcontent,
            title: projectid.newtitle,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'UPDATEPROJECT_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'UPDATEPROJECT_ERROR', err})
        })
    }
}

export const deleteProject = (projectid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('projects').doc(projectid).delete().then(() => {
            dispatch({ type: 'DELETEPROJECT_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'DELETEPROJECT_ERROR', err })
        })
    }
}