import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { costSuccess, notiCost } from '../../../store/actions/docAction'

class AccountDetail extends Component {
    state = {
        name: ''
    }
    render() {
        const { ID, branch, profile } = this.props
        let style1
        let text1
        let style2
        let text2
        let checked = " "

        if (ID != '') {
            if (branch.statusCost == 'sendCost' || branch.statusCost == 'Success') {
                style1 = "disabled"
                text1 = "ส่งเอกสารแล้ว"
            }else {
                style1 = "red"
                text1 = "ยังไม่ได้ส่งเอกสาร"
            }

            if (branch.statusCost != 'Success' && branch.statusCost == 'sendCost') {
                style2 = "red"
                text2 = "ยังไม่ได้รับ Email จาก Shared service"
                checked = <input placeholder="กรุณากรอกชื่อก่อนคลิกปุ่ม" onChange={(e) => {this.setState({name: e.target.value})}} />
            }else {
                style2 = "disabled"
                text2 = "ส่งเอกสารแล้ว"
            }

            let link = "/docopen/" + "check/" + ID

            return (
                <div>
                    <mapStateToProps ID={ID} />
                    <div className="row">
                        <div className="col s12 m6">การส่งให้ Shared Service</div>
                        <div className="col s12 m6">
                            <button className={"btn waves-effect waves-light right " + style1} onClick={() => {
                                this.props.history.push(link)
                            }}>{text1}</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m6">สถานะเลข Cost Center</div>
                        <div className="col s12 m6">
                            <button className={"btn waves-effect waves-light right " + style2} onClick={() => {
                                if ( this.state.name === profile.firstThai) {
                                    this.setState({
                                        status: 'Success',
                                        ID:ID,
                                        business: branch.Branch.Type.label,
                                        name: branch.Branch.Name,
                                        user: profile.firstName + " " + profile.lastName,
                                        err: ' '
                                    }, () => {
                                        console.log(this.state)
                                        this.props.costSuccess(this.state)
                                        this.props.notiCost(this.state)
                                    })}else if (this.state.name === '') {
                                        this.setState({
                                            err: <span style={{color: 'red'}}>กรุณากรอกชื่อ</span>
                                        })
                                    }else {
                                        this.setState({
                                            err: <span style={{color: 'red'}}>กรอกผิด</span>
                                        })
                                    }
                            }}>{text2}</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            { this.state.err } 
                        </div>
                        <div className="col s12 m9 right">
                            { checked }
                        </div>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="container">
                    <h5 className="center">...โปรดเลือกสาขา...</h5>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const ID = ownProps.ID
    const branchs = state.firestore.data.branchs
    const branch = branchs ? branchs[ID]: ''
    return {
        branch: branch
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        costSuccess: (detail) => dispatch(costSuccess(detail)),
        notiCost: (detail) => dispatch(notiCost(detail))
    }
}

export default compose( firestoreConnect([{ collection: 'branchs' }]), connect(mapStateToProps, mapDispachToProps))(AccountDetail)