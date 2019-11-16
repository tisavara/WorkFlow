import React, { Component } from 'react'

class EmailUserToAccount extends Component {
    render() {
        return (
            <form>
                <div className="input-field">
                    <label htmlFor="name">ชื่อ</label>
                    <input type="text" id="name" onChange={this.handleChang} />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChang} />
                </div>
                <div className="input-field">
                    <label htmlFor="message">ข้อความ</label>
                    <textarea type="text" id="message" onChange={this.handleChang} />
                </div>
                <button className="btn blue lighten-1 z-depth-0"><i className="material-icons left">email</i>ส่ง</button>
            </form>
        )
    }
}

export default EmailUserToAccount