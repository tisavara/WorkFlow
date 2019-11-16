import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import DownloadDetail from './download_detail'

class Download extends Component {
    state = {
        branchID: ''
    }
    handleChange = (e) => {
        this.setState({
            branchID: e.value
        })
    }
    render() {
        const { branchs } = this.props
        let detail

        if (this.state.branchID == '') {
            detail = <Detail />
        }else {
            detail = <DownloadDetail detail={this.state.branchID} />
        }

        return (
            <div className="container">
                <h3>Download PDF</h3>
                <div className="row">
                    <div className="col"><div className="center"><br/><i class="material-icons">search</i></div></div>
                    <div className="col s11">
                        <Select placeholder="Search" options={branchs && branchs.map(branch => {
                        return {
                            value: branch.id, label: branch.Branch.Name
                        }
                    })} onChange={this.handleChange}></Select>
                    </div>
                </div>
                {detail}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        branchs: state.firestore.ordered.branchs
    }
}

export default compose( firestoreConnect([{ collection: 'branchs' }]), connect(mapStateToProps))(Download)


const Detail = () => {
    return (
        <div className="center">
            <br /><h3>...โปรดเลือกชื่อสาขา...</h3><br />
        </div>
    )
}