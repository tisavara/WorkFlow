import React, {Component} from 'react'
import SignUp from '../SignUp'
import Member from './Member'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class ManageMem extends Component {
    render() {
        const { users, auth, profile } = this.props
        if (!auth.uid) return <Redirect to="/signin" />
        if (profile.status !== 'Admin') return <Redirect to="/" />
        return (
            <div className="container row">
                <SignUp />
                <Member users={users} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose( 
    firestoreConnect([
        { collection: 'users' }
    ]),
    connect(mapStateToProps)
)(ManageMem)