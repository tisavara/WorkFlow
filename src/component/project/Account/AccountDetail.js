import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { sendCost } from '../../../store/actions/docAction'

class AccountDetail extends Component {
    state = {
        status: ''
    }
    render() {
        const { ID, branch } = this.props
        let style1
        let text1
        let style2
        let text2
        let typing

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
            }else {
                style2 = "disabled"
                text2 = "ส่งเอกสารแล้ว"
            }

            return (
                <div>
                    <mapStateToProps ID={ID} />
                    <div className="row">
                        <div className="col s12 m6">การส่งให้ Shared Service</div>
                        <div className="col s12 m6">
                            <button className={"btn waves-effect waves-light right " + style1} onClick={() => {
                                this.setState({
                                    status: 'sendCost',
                                    ID: ID
                                }, () => {
                                    console.log(this.state)
                                    this.props.sendCost(this.state)
                                })
                            }}>{text1}</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m6">สถานะเลข Cost Center</div>
                        <div className="col s12 m6">
                            <button className={"btn waves-effect waves-light right " + style2} onClick={() => {
                                this.setState({
                                    status: 'Success',
                                    ID:ID
                                }, () => {
                                    console.log(this.state)
                                    this.props.sendCost(this.state)
                                })
                            }}>{text2}</button>
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
        sendCost: (detail) => dispatch(sendCost(detail))
    }
}

export default compose( firestoreConnect([{ collection: 'branchs' }]), connect(mapStateToProps, mapDispachToProps))(AccountDetail)