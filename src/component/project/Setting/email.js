import React, { Component } from "react";
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { emailAction } from '../../../store/actions/emailAction'

class Email extends Component {
  state = {
    id: "8NzZ9Eb49NNUJZ6OuYtY",
    emailAccount: '',
    emailBoss: '',
    emailInsure: '',
    emailMiniboss: '',
    emailSCB: ''
  }
  handleChange = () => {
    this.setState({
      emailAccount: this.getAccount.value,
      emailBoss: this.getInsure.value,
      emailInsure: this.getSCB.value,
      emailMiniboss: this.getMiniboss.value,
      emailSCB: this.getBoss.value
    })
  }
  render() {
    const { email } = this.props
    console.log(this.state)
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.emailAction(this.state)
      }}>
        <div className="input-field">
          <label htmlFor="emailAccount" className="active">
            แก้ไข Email บัญชี
          </label>
          <input type="email" onChange={this.handleChange} defaultValue={email.emailAccount} ref={(input) => this.getAccount = input} />
        </div>

        <div className="input-field">
          <label htmlFor="emailInsure" className="active">
            แก้ไข Email ประกัน
          </label>
          <input type="email" onChange={this.handleChange} defaultValue={email.emailInsure} ref={(input) => this.getInsure = input} />
        </div>

        <div className="input-field">
          <label htmlFor="emailSCB" className="active">
            แก้ไข Email รถขนเงิน
          </label>
          <input type="email" onChange={this.handleChange} defaultValue={email.emailSCB} ref={(input) => this.getSCB = input} />
        </div>

        <div className="input-field">
          <label htmlFor="emailMiniboss" className="active">
            แก้ไข Email รคป.
          </label>
          <input type="email" onChange={this.handleChange} defaultValue={email.emailMiniboss} ref={(input) => this.getMiniboss = input} />
        </div>

        <div className="input-field">
          <label htmlFor="emailBoss" className="active">
            แก้ไข Email กจก.
          </label>
          <input type="email" onChange={this.handleChange} defaultValue={email.emailBoss} ref={(input) => this.getBoss = input} />
        </div>
        <button
          type="submit"
          class="btn waves-effect waves-light blue"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const id = "8NzZ9Eb49NNUJZ6OuYtY"
  const emails = state.firestore.data.email
  const email = emails ? emails[id]: ''
  return {
    email: email
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emailAction: (email) => dispatch(emailAction(email))
  }
}

export default compose(firestoreConnect([{ collection: 'email' }]), connect(mapStateToProps, mapDispatchToProps))(Email)
