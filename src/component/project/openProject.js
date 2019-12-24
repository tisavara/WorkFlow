import React, { Component } from 'react'
import Select from 'react-select'
import moment from 'moment'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AddressFormTypeahead from 'react-thailand-address-typeahead'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { OpenAction } from '../../store/actions/openAction'

class openProject extends Component {
    state = {
        name: '',
        code: '',
        field: '',
        employer: '',
        type: '',
        deposit: '',
        limit: '',
        bank: 'no',
        distance: 'no',
        All: '',
        Address: '',
        Vice: '',
        Area: '',
        UserName: '',
        cost: '', v: '', o: '', NGV: '', SE: ''
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            limit: this.getLimit.value,
            cost: this.getCost.value,
            UserName: this.getUsername.value
        })
    }
    handleSelectField = (e) => {
        this.setState({
            field: e
        })
    }
    handleSelectEmployer = (e) => {
        this.setState({
            employer: e
        })
    }
    handleSelectType = (e) => {
        this.setState({
            type: e
        })
    }
    handleSelectDeposit = (e) => {
        this.setState({
            deposit: e
        })
    }
    handleSelectUnit = (e) => {
        this.setState({
            unit: e
        })
    }
    handleSelectBank = (e) => {
        this.setState({
            bank: e.value
        })
    }
    handleSelectVice = (e) => {
        this.setState({
            Vice: e.value
        })
    }
    handleSelectArea = (e) => {
        this.setState({
            Area: e.value
        })
    }
    handleChangAddress = (e) => {
        this.setState({
            All: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.field === '' || this.state.type === '' || this.state.employer === '' || this.state.deposit === '' || this.state.Address === '' || this.state.Area === '' || this.state.Vice === '') {
            alert('คุณยังกรอกข้อมูลไม่ครบ')
        } else {
            console.log(this.state)
            this.props.openAction(this.state)
            this.props.history.push('/now')
        }
    }

    UpValue = e => this.setState({ v: +e.target.value })
    UpOil = e => this.setState({ o: +e.target.value })
    UpNGV = e => this.setState({ NGV: +e.target.value })
    UpSE = e => this.setState({ SE: +e.target.value })

    resultOilA = () => ((this.state.o * this.state.v) * 1)
    resultNGVA = () => ((this.state.NGV * this.state.v) * 1)
    resultSEA = () => ((this.state.SE + this.state.v) * (1 + 1))
    resultA = () => (this.state.v * 1)

    resultOilB = () => ((this.state.o * this.state.v) * (1 + 2))
    resultNGVB = () => ((this.state.NGV * this.state.v) * (1 + 2))
    resultSEB = () => ((this.state.SE + this.state.v) * (2 + 2))
    resultB = () => (this.state.v * (2 + 2))

    render() {

        const { auth, vices, areas, profile } = this.props

        if (!auth.uid) return <Redirect to="/" />

        if (profile.status === 'Accout' || profile.status === 'Insure') return <Redirect to="/" />

        const isOil = this.state.type.value
        const isDeposit = this.state.deposit.value
        const bankLogo = this.state.bank
        const TC = this.state.type.value
        const SerV = this.state.field.value
        let coder
        let Blogo
        let result
        let Oil
        let unit
        let Type
        let bank

        if (isDeposit === 'A') {
            if (isOil === 1 && SerV !== 4) {
                Oil = <Caloil oil={this.UpOil} />
                result = this.resultOilA()
                unit = "ลิตร/วัน"
            } else if (isOil === 2 && SerV !== 4) {
                Oil = <CalNGV ngv={this.UpNGV} />
                result = this.resultNGVA()
                unit = "กิโลกรัม/วัน"
            } else if (isOil === 3 && SerV !== 4) {
                Oil = <Cal7 S_elevent={this.UpSE} />
                result = this.resultSEA()
                unit = "บาท/วัน"
            } else {
                result = this.resultA()
                unit = "บาท/วัน"
            }
        } else {
            if (isOil === 1 && SerV !== 4) {
                Oil = <Caloil oil={this.UpOil} />
                result = this.resultOilB()
                unit = "ลิตร/วัน"
            }
            else if (isOil === 2 && SerV !== 4) {
                Oil = <CalNGV ngv={this.UpNGV} />
                result = this.resultNGVB()
                unit = "กิโลกรัม/วัน"
            }
            else if (isOil === 3 && SerV !== 4) {
                Oil = <Cal7 S_elevent={this.UpSE} />
                result = this.resultSEB()
                unit = "บาท/วัน"
            }
            else {
                result = this.resultB()
                unit = "บาท/วัน"
            }
        }

        if (SerV === 4) {
            Type = <Service service={this.handleSelectType} />
        } else {
            Type = <Retail type={this.handleSelectType} />
        }

        if (bankLogo === 'กรุงเทพ') {
            Blogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTd68Kdxd8Kq-6xb767k_D7OrV4Hxg0z02T99-tQLNJ1wS8BN"
        } else if (bankLogo === 'กสิกรไทย') {
            Blogo = "https://s.isanook.com/mn/0/ud/36/182207/20131121182520820.jpg"
        } else if (bankLogo === 'กรุงไทย') {
            Blogo = "https://hilight.kapook.com/img_cms2/user/natthida/inn/ktb.jpg"
        } else if (bankLogo === 'ทหารไทย') {
            Blogo = "https://jobs.techtalkthai.com/wp-content/uploads/2018/08/20180826_114905.png?w=640"
        } else if (bankLogo === 'ไทยพาณิชย์') {
            Blogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8hZ2MRw5iDM2oi7HIARRS5miM7vzObR7Gf4aAGJnc6a2INRY"
        } else if (bankLogo === 'กรุงศรีอยุธยา') {
            Blogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcINmlQ1h950bKrj7g000B_F0yiRw4_8Y8PonZLc_3PQXCExfW"
        } else if (bankLogo === 'เกียรตินาคิน') {
            Blogo = "http://byorder.co.th/images/portfolio/kk.jpg"
        } else if (bankLogo === 'CIMB') {
            Blogo = "https://media.licdn.com/dms/image/C4D0BAQHXZ_kpdg5rQw/company-logo_200_200/0?e=2159024400&v=beta&t=tX7o0H33mgUwf_G6gsSmaFPWfE5iriNDH6B_mlOuzzo"
        } else if (bankLogo === 'ทิสโก้') {
            Blogo = "https://rabbitfinance.com/images/nana/glossary/310xNx324a166945e864a9a94a277322227493.jpg.pagespeed.ic.uykqaShHHh.jpg"
        } else if (bankLogo === 'ธนชาต') {
            Blogo = "https://s.isanook.com/mn/0/ud/36/182207/20131121182350992.jpg"
        } else if (bankLogo === 'UOB') {
            Blogo = "https://s.isanook.com/mn/0/ud/36/182207/20131121182337445.jpg"
        } else if (bankLogo === 'สแตนดาร์ดชาร์เตอร์ด') {
            Blogo = "https://s.isanook.com/mn/0/ud/36/182207/20131121182311229.jpg"
        } else if (bankLogo === 'ไทยเครดิตเพื่อรายย่อย') {
            Blogo = "https://www.job4thai.com/wp-content/uploads/job-thai-credit-bank.jpg"
        } else if (bankLogo === 'แลนด์ แอนด์ เฮาส์') {
            Blogo = "https://cdn.marketingoops.com/wp-content/uploads/2017/07/LHBank_1.jpg"
        } else if (bankLogo === 'ICBC') {
            Blogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPb_Lcxx8kpbwwa0JhfC68QSY6bgjhDK3id40CU7Vhi0TfWorz"
        } else if (bankLogo === 'ออมสิน') {
            Blogo = "http://logo-th.com/wp-content/uploads/2018/05/%E0%B8%AD%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B8%B4%E0%B8%99.jpg"
        } else if (bankLogo === 'พัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย') {
            Blogo = "https://www.egov.go.th/upload/eservice-thumbnail/img_1ae00dd3f564c181a847b3563113aadf.png"
        } else if (bankLogo === 'เพื่อการเกษตรและสหกรการเกษตร') {
            Blogo = "https://www.matichon.co.th/wp-content/uploads/2016/03/%E0%B8%98%E0%B8%81%E0%B8%AA.logo_.jpg"
        } else if (bankLogo === 'เพื่อการส่งออกและนำเข้าแห่งประเทศไทย') {
            Blogo = "http://2.bp.blogspot.com/--E0-JMzwRbc/T0zoEd3UDgI/AAAAAAAAAAk/HL57Mw_o-es/s1600/59020_~1.JPG"
        } else if (bankLogo === 'อาคารสงเคราะห์') {
            Blogo = "https://www.ghbank.co.th/assets/about/img/logo-ghb.png"
        } else if (bankLogo === 'อิสลามแห่งประเทศไทย') {
            Blogo = "http://www.muslimthaipost.com/upfile/ibank/banner_ibank.jpg"
        } else {
            Blogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWrnfsD0snYnfOKmSTsbSTDEKswqHQisy4vEnvPnaOfJMdlQK"
        }

        if (TC == 5) {
            coder = "4"
        } else {
            coder = "5"
        }

        if (this.state.deposit.label === 'เดินทางเอง' || this.state.deposit.label === 'จ้างตำรวจ' || this.state.deposit.label === 'Secure(7-11)') {
            bank = <div className="row">
                <div className="col s2 center-align">
                    <br />
                    <img src={Blogo} style={{ width: 60 }} />
                </div>

                <div className="col s6">
                    <span className="red-text">**</span>
                    <Select placeholder="ธนาคารที่นำฝาก**" options={ธนาคาร} onChange={this.handleSelectBank} />
                </div>

                <div className="col s3">
                    <div className="input-field">
                        <label htmlFor="distance" className="red-text">ระยะทาง ( กม. ) **</label>
                        <input type="text" id="distance" onChange={this.handleChang} />
                    </div>
                </div>

            </div>
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="card-panel hoverable">

                    <h3 className="gray-text text-darken-3">เปิดสาขา</h3>

                    <div className="row">

                        <div className="col s3">
                            <h5 className="right">วันที่เปิด</h5>
                        </div>
                        <div className="col s3">
                            <div className="input-field">
                                <input type="text" id="title" value={moment(new Date().toLocaleString()).format('lll')} />
                            </div>
                        </div>

                        <div className="col s3">
                            <span className="red-text">**</span>
                            <div>
                                <Select
                                    placeholder="สายงาน**"
                                    options={สายงาน}
                                    onChange={this.handleSelectField}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col s3">
                            <span className="red-text">**</span>
                            <div>
                                {Type}
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col s3">
                            <span className="red-text">**</span>
                            <div>
                                <Select
                                    placeholder="ผู้ว่าจ้าง**"
                                    options={Employer}
                                    onChange={this.handleSelectEmployer}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col s3">
                            <div className="input-field">
                                <label htmlFor="name" className="red-text">ชื่อสาขา**</label>
                                <input type="text" id="name" onChange={this.handleChang} required />
                            </div>
                        </div>

                        <div className="col s3">
                            <div className="input-field">
                                <label htmlFor="code" className="red-text">รหัสสาขา**ห้ามใส่ F,H,D</label>
                                <input type="text" id="code" maxlength={coder} onChange={this.handleChang} required />
                            </div>
                        </div>

                        <div className="col s3">
                            <span className="red-text">**</span>
                            <div>
                                <Select
                                    placeholder="วิธีการนำฝาก**"
                                    options={วิธีการนำฝาก}
                                    onChange={this.handleSelectDeposit}
                                    required
                                />
                            </div>
                        </div>

                    </div>
                    <div className="row">

                        <div className="col s3">
                            {Oil}
                        </div>

                        <div className="col s3">
                            <div className="input-field">
                                <label htmlFor="sale" className="red-text">ยอดขายโดยประมาณ**</label>
                                <input type="number" id="sale" onChange={this.UpValue} placeholder={unit} required />
                            </div>
                        </div>
                        <div className="col s3">
                            <div className="input-field">
                                <label htmlFor="limit" className="active">วงเงินค้ำประกัน</label>
                                <input disabled type="text" id="limit" value={result} ref={(input) => this.getLimit = input} />
                            </div>
                        </div>

                        <div className="col s3">
                            <div className="input-field">
                                <label htmlFor="limit" className="active">เลข Cost center</label>
                                <input disabled type="text" id="cost"
                                    value={30 + this.state.field.value + this.state.type.value + this.state.employer.value + this.state.type.code + this.state.code} ref={(input) => this.getCost = input} />
                            </div>
                        </div>

                        {bank}

                    </div>

                    <div className="divider"></div>

                    <h3 className="">ที่อยู่</h3>
                    <textarea onChange={this.handleChangAddress} required />
                    <AddressFormTypeahead required onAddressSelected={(addressObject) => this.setState({ Address: addressObject })} />

                    <div className="divider"></div>

                    <h3 className="gray-text text-darken-3">ผู้จัดการ</h3>

                    <div className="row">
                        <div className="col s3">
                            <h5 className="right">ผู้จัดการฝ่าย</h5>
                        </div>
                        <div className="col s3">
                            <span className="red-text">**</span>

                            <Select placeholder="ชื่อ**" required
                                options={vices && vices.map(vice => {
                                    return {
                                        value: vice.id,
                                        label: vice.title.label + ' ' + vice.Thainame + ' ' + vice.Thaisurname
                                    }
                                })}
                                onChange={this.handleSelectVice}
                            />
                        </div>
                        <div className="col s2">
                            <h5 className="right">ผู้จัดการสาขา</h5>
                        </div>
                        <div className="col s3">
                            <span className="red-text">**</span>
                            <Select placeholder="ชื่อ**" required
                                options={areas && areas.map(area => {
                                    return {
                                        value: area.id,
                                        label: area.title2.label + ' ' + area.Thainame2 + ' ' + area.Thaisurname2
                                    }
                                })}
                                onChange={this.handleSelectArea}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s3">
                            <h5 className="right">ผู้จัดการเขต</h5>
                        </div>
                        <div className="col s3">
                            <div className="input-field">
                                <input value={this.props.profile.titleThai + ' ' + this.props.profile.firstThai + '   ' + this.props.profile.lastThai} />
                                <input type="hidden" value={this.props.profile.firstName + ' ' + this.props.profile.lastName} ref={(input) => this.getUsername = input} />
                            </div>
                        </div>
                        <div className="col s3">
                            <div className="input-field">
                                <input value={this.props.profile.Id} />
                            </div>
                        </div>
                        <div className="col s3">
                            <div className="input-field">
                                <input value={this.props.profile.tel} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <button type="submit" class="btn waves-effect waves-light blue" name="action">Submit
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                        <div className="col">
                            <button type="reset" class="btn waves-effect waves-light red" name="action">Cancle
                                <i class="material-icons right">clear_all</i>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth,
        vices: state.firestore.ordered.vice,
        areas: state.firestore.ordered.area,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openAction: branchs => dispatch(OpenAction(branchs))
    };
};

export default compose(firestoreConnect([{ collection: 'vice' }, { collection: 'area' }]),
    connect(mapStateToProps, mapDispatchToProps))(openProject)

const สายงาน = [
    { value: '5', label: 'สายงานธุรกิจค้าปลีก' },
    { value: '1', label: 'กรรมการผู้จัดการ' },
    { value: '2', label: 'สายงานทรัพยากรบุคคลและบริหารงานทั่วไป' },
    { value: '3', label: 'สายงานวางแผนและประเมินผลธุรกิจ' },
    { value: '4', label: 'สายงานธุรกิจบริการ' }
]

const Employer = [
    { value: '1', label: 'ปตท.' },
    { value: '2', label: 'ในเครือ' },
    { value: '3', label: 'ภายนอก' }
]

const business = [
    { value: '1', label: 'สถานีน้ำมัน', code: '' },
    { value: '2', label: 'NGV', code: '' },
    { value: '3', label: '7-Eleven', code: '' },
    { value: '4', label: 'Cafe Amazon', code: '' },
    { value: '5', label: 'Fit auto', code: 'F' },
    { value: '5', label: 'ฮั่วเช่งฮง', code: 'H' },
    { value: '5', label: 'Daddy dough', code: 'D' }
]

const บริการ = [
    { value: '0', label: 'ส่วนกลาง', code: '' },
    { value: '1', label: 'ปตท.', code: '' },
    { value: '2', label: 'ในเครือ', code: '' },
    { value: '3', label: 'New Business', code: '' }
]

const วิธีการนำฝาก = [
    { value: 'A', label: 'SCB' },
    { value: 'B', label: 'เดินทางเอง' },
    { value: 'B', label: 'จ้างตำรวจ' },
    { value: 'B', label: 'Secure(7-11)' },
    { value: 'A', label: 'สัญญาห้าง' }
]

const ธนาคาร = [
    { value: 'กรุงเทพ', label: 'กรุงเทพ' }, { value: 'กสิกรไทย', label: 'กสิกรไทย' }, { value: 'กรุงไทย', label: 'กรุงไทย' },
    { value: 'ทหารไทย', label: 'ทหารไทย' }, { value: 'ไทยพาณิชย์', label: 'ไทยพาณิชย์' },
    { value: 'กรุงศรีอยุธยา', label: 'กรุงศรีอยุธยา' }, { value: 'เกียรตินาคิน', label: 'เกียรตินาคิน' },
    { value: 'CIMB', label: 'CIMB' }, { value: 'ทิสโก้', label: 'ทิสโก้' }, { value: 'ธนชาต', label: 'ธนชาต' },
    { value: 'UOB', label: 'UOB' }, { value: 'สแตนดาร์ดชาร์เตอร์ด', label: 'สแตนดาร์ดชาร์เตอร์ด' },
    { value: 'ไทยเครดิตเพื่อรายย่อย', label: 'ไทยเครดิตเพื่อรายย่อย' }, { value: 'แลนด์ แอนด์ เฮาส์', label: 'แลนด์ แอนด์ เฮาส์' },
    { value: 'ICBC', label: 'ICBC' }, { value: 'ออมสิน', label: 'ออมสิน' },
    { value: 'พัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย', label: 'พัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย' },
    { value: 'เพื่อการเกษตรและสหกรการเกษตร', label: 'เพื่อการเกษตรและสหกรการเกษตร' },
    { value: 'เพื่อการส่งออกและนำเข้าแห่งประเทศไทย', label: 'เพื่อการส่งออกและนำเข้าแห่งประเทศไทย' },
    { value: 'อาคารสงเคราะห์', label: 'อาคารสงเคราะห์' }, { value: 'อิสลามแห่งประเทศไทย', label: 'อิสลามแห่งประเทศไทย' }
]

const Caloil = (props) => {
    const oil = props.oil
    return (
        <div className="input-field">
            <label htmlFor="oil" className="red-text">ราคาน้ำมัน**</label>
            <input type="text" id="oil" placeholder="บาท/ลิตร" onChange={oil} required />
        </div>
    )
}

const CalNGV = (props) => {
    const ngv = props.ngv
    return (
        <div className="input-field">
            <label htmlFor="ngv" className="red-text">ราคาแก๊ส**</label>
            <input type="text" id="ngv" placeholder="บาท/กิโลกรัม" onChange={ngv} required />
        </div>
    )
}

const Cal7 = (props) => {
    const S_elevent = props.S_elevent
    return (
        <div className="input-field">
            <label htmlFor="S_elevent" className="red-text">Counter service**</label>
            <input type="text" id="S_elevent" placeholder="บาท/วัน" onChange={S_elevent} required />
        </div>
    )
}

const Retail = (props) => {
    const type = props.type
    return (
        <Select
            placeholder="ประเภทธุรกิจ**"
            options={business}
            onChange={type}
        />
    )
}

const Service = (props) => {
    const service = props.service
    return (
        <Select
            placeholder="ประเภทธุรกิจ**"
            options={บริการ}
            onChange={service}
        />
    )
}
