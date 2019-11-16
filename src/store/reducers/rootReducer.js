import authReducer from './authReducer'
import projectReducer from './projectReducer'
import ViceReducer from './viceReducer'
import AreaReducer from './areaReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import OpenReducer from './openReducer'
import EmailReducer from './emailReducer'
import DocReducer from './docReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    vice: ViceReducer,
    area: AreaReducer,
    email: EmailReducer,
    open: OpenReducer ,
    doc: DocReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer