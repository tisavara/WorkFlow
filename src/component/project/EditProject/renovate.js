import React, { Component } from 'react'
import moment from 'moment'

class Renovate extends Component {
    render() {
        return (
            <div className="container">
                <form className="container card-panel hoverable">
                    <h3>Renovate</h3>
                    <h5 align="center">เลือกระยะเวลา</h5>
                    
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
                        <div className="col s8"><input /></div>
                        <div className="col s2">
                            <i class="material-icons blue-text">assignment_turned_in</i>
                        </div>
                    </div>

                    <button className="btn blue">Submit<i class="material-icons right">send</i></button>
                </form>
            </div>
        )
    }
}

export default Renovate