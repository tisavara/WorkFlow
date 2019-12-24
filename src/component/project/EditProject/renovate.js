import React, { Component } from 'react'
import moment from 'moment'
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Renovate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(new Date().toLocaleString()).format('LL'),
            startTime: moment(new Date().toLocaleString()).format('LTS'),
            endDate: '',
            endTime: '',
            SCB: '',
            cursor: false,
            error: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleEmail = () => {
        const { email } = this.props
        if (this.state.SCB === '') {
            this.setState({
                SCB: email.emailSCB,
                error: ""
            })
        }
        this.setState({
            cursor: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.cursor === true) {
            console.log(this.state);
        } else {
            this.setState({
                error: "Don't forget to check mail"
            })
        }
    }

    render() {
        const { email } = this.props

        if (email) {
            return (
                <div className="container">
                    <form className="card-panel hoverable" onSubmit={this.handleSubmit}>
                        <h3>Renovate</h3>
                        <h5 align="center">เลือกระยะเวลาปิด Renovate</h5>

                        <div className="row">
                            <div className="col s2"><h6 className="right">เริ่มต้น</h6></div>
                            <div className="col s4">
                                <input value={moment(new Date().toLocaleString()).format('LL')} />
                            </div>
                            <div className="col s2"><h6 className="right">เวลา</h6></div>
                            <div className="col s4">
                                <input value={moment(new Date().toLocaleString()).format('LTS')} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s2"><h6 className="right">สิ้นสุด</h6></div>
                            <div className="col s4">
                                <input type="date" id="endDate" onChange={this.handleChange} required />
                            </div>
                            <div className="col s2"><h6 className="right">เวลา</h6></div>
                            <div className="col s4">
                                <input type="time" id="endTime" onChange={this.handleChange} required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s2"><h6 className="right">E-mail SCB</h6></div>
                            <div className="col s6"><input id="SCB" onChange={this.handleChange} defaultValue={email.emailSCB} /></div>
                            <div className="col s1">
                                <i style={{ cursor: 'pointer' }} className={this.state.cursor ? "material-icons green-text" : "material-icons blue-text"} onClick={this.handleEmail}>assignment_turned_in</i>
                            </div>
                            <div className="col s3">
                                <span style={{ color: 'red' }}>{this.state.error}</span>
                            </div>
                        </div>

                        <button className="btn blue">Submit<i className="material-icons right">send</i></button>
                    </form>
                </div>
            )
        } else {
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
    const email = emails ? emails[ID] : null
    return {
        email: email
    }
}

export default compose(firestoreConnect([{ collection: 'email' }]), connect(mapStateToProps))(Renovate)