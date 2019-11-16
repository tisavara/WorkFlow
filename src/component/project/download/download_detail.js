import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from "react-router-dom";

const DownloadDetail = ({detail, branch}) => {
    return (
        <div>
            <mapStateToProps ownProps={detail} />
                <h5 align="center">{ branch.Branch.Name }</h5>
                <table className="striped">
                    <thead>
                        <tr>
                            <th width="100">#ธคป.</th>
                            <th width="1050">เอกสาร</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ขอเปิด Cost center</td>
                            <td><Link to={"/docopen/"+ "download/" + detail} key={"download", detail}>Download</Link></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ขอทำประกัน</td>
                            <td><a>Download</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>เบิกโทรศัพท์</td>
                            <td><a>Download</a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>เบิกเงินสำรองทอน</td>
                            <td><a>Download</a></td>
                        </tr>
                    </tbody>
                </table>

                <table className="striped">
                    <thead>
                        <tr>
                            <th width="100">#บัญชี</th>
                            <th width="1050">เอกสาร</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>เปิด Cost center</td>
                            <td><a>Download</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>เบิกเงินสำรองทอน</td>
                            <td><a>Download</a></td>
                        </tr>
                    </tbody>
                </table>
                
                <table className="striped">
                    <thead>
                        <tr>
                            <th width="100">#ประกัน</th>
                            <th width="1050">เอกสาร</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Memo ทำประกัน</td>
                            <td><a>Download</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>หนังสือทำประกัน</td>
                            <td><a>Download</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Memo ค่าเบี้ยประกัน</td>
                            <td><a>Download</a></td>
                        </tr>
                    </tbody>
                </table>

                <table className="striped">
                    <thead>
                        <tr>
                            <th width="100">#อื่นๆ</th>
                            <th width="1050">เอกสาร</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ข้อมูลสาขาทั้งหมด</td>
                            <td><a>Download</a></td>
                        </tr>
                    </tbody>
                </table>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const ID = ownProps.detail
    const branchs = state.firestore.data.branchs
    const branch = branchs ? branchs[ID]: null
    return {
        branch: branch
    }
}

export default compose( firestoreConnect([{ collection: 'branchs' }]), connect(mapStateToProps))(DownloadDetail)