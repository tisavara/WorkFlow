import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Select from 'react-select';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'
import AddressFormTypeahead from "react-thailand-address-typeahead";

class SignUp extends Component {
    state = {
        emailID: "8NzZ9Eb49NNUJZ6OuYtY",
        email: '',
        password: '',
        titles: '',
        firstName: '',
        lastName: '',
        firstThai: '',
        lastThai: '',
        position: '',
        tel: '',
        status1: '',
        Address1: '',
        Address2: ''
    }
    handleSelect1 = (e) => {
        this.setState({titles: e})
    }
    handleSelect2 = (e) => {
        this.setState({status1: e.value})
    };
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.signUp(this.state)
    }
    render() {
        const { auth, authError, style } = this.props
        if (!auth.uid) {
            return <Redirect to="/signin" />
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit} className="card-panel hoverable">

                    <h3 className="gray-text text-darken-3">Register</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChang} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">รหัสพนักงาน</label>
                        <input type="text" id="password" onChange={this.handleChang} />
                    </div>

                    <Select placeholder="คำนำหน้าชื่อ" options={title}  onChange={this.handleSelect1} />

                    <div className="row">
                        <div className="col s6">
                            <div className="input-field">
                                <label htmlFor="firstThai">ชื่อจริง</label>
                                <input type="text" id="firstThai" onChange={this.handleChang} />
                            </div>
                        </div>
                        <div className="col s6">
                            <div className="input-field">
                                <label htmlFor="lastThia">นามสกุล</label>
                                <input type="text" id="lastThai" onChange={this.handleChang} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col s6">
                            <div className="input-field">
                                <label htmlFor="firstName">FirstName</label>
                                <input type="text" id="firstName" onChange={this.handleChang} />
                            </div>
                        </div>
                        <div className="col s6">
                            <div className="input-field">
                                <label htmlFor="lastName">lastName</label>
                                <input type="text" id="lastName" onChange={this.handleChang} />
                            </div>
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor="position">ตำแหน่ง</label>
                        <input type="text" id="position" onChange={this.handleChang} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="tel">เบอร์โทรศัพท์</label>
                        <input type="text" id="tel" onChange={this.handleChang} />
                    </div>

                    <div className="divider"></div>

                    <h3 className="">ที่อยู่</h3>
                    <textarea id="Address1" onChange={this.handleChang}/>
                    <AddressFormTypeahead
                        onAddressSelected={addressObject =>
                        this.setState({
                            Address2: addressObject
                        })
                        }
                    />

                    <Select placeholder="Status" options={status} onChange={this.handleSelect2} />

                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Register</button>
                        <div className={style}>
                            { authError ? <p><h5>{ authError }</h5></p>: null}
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        style: state.auth.style
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

const status = [
    { value: 'Admin', label: 'ผู้จัดการระบบ' },
    { value: 'User', label: 'ผู้จัดการเขต' },
    { value: 'Accout', label: 'ฝ่ายบัญชี' },
    { value: 'Insure', label: 'ฝ่ายประกัน' }
]

const title = [
    { value: 'Miss', label: 'นางสาว' },
    { value: 'Mrs', label: 'นาง' },
    { value: 'Mr', label: 'นาย' }
]
