import React, { Component } from 'react'
import moment from 'moment'
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Renovate extends Component {
    render() {
        const { email } = this.props

        if (email) {
            return (
                <div className="container">
                    <form className="container card-panel hoverable">
                        <h3>Renovate</h3>
                        <h5 align="center">เลือกระยะเวลาปิด Renovate</h5>
                        
                        <div className="row">
                            <div className="col s2"><h6 className="right">เริ่มต้น</h6></div>
                            <div className="col s4">
                                <input value={moment(new Date().toLocaleString()).format('lll')} />
                            </div>
                            <div className="col s2"><h6 className="right">เวลา</h6></div>
                            <div className="col s4">
                                <input value={moment(new Date().toLocaleString()).format('LTS')} />
                            </div>
                        </div>
    
                        <div className="row">
                            <div className="col s2"><h6 className="right">สิ้นสุด</h6></div>
                            <div className="col s4">
                                <input type="date" />
                            </div>
                            <div className="col s2"><h6 className="right">เวลา</h6></div>
                            <div className="col s4">
                                <input type="time" />
                            </div>
                        </div>
    
                        <div className="row">
                            <div className="col s2"><h6 className="right">E-mail SCB</h6></div>
                            <div className="col s8"><input defaultValue={email.emailSCB} /></div>
                            <div className="col s2">
                                <i class="material-icons blue-text">assignment_turned_in</i>
                            </div>
                        </div>
    
                        <button className="btn blue">Submit<i class="material-icons right">send</i></button>
                    </form>
                </div>
            )
        }else {
            return (
                <div className="container center">
                <br />
                <br />
                <br />
                <br />
                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    const ID = '8NzZ9Eb49NNUJZ6OuYtY'
    const emails = state.firestore.data.email
    const email = emails ? emails[ID]: null
    return {
        email: email
    }
}

export default compose( firestoreConnect([{ collection: 'email' }]), connect(mapStateToProps))(Renovate)