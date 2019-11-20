import React, { Component } from 'react'
import { Link } from "react-router-dom";

class CostCenter extends Component {
    render() {
        const ID = this.props.match.params.id
        return (
            <div className="container">
                <h1>Cost center</h1>
                <div className="row">
                    <div className="col s12 m5" style={{ borderStyle: 'dashed', margin: 10 }}>
                        <h3>เอกสาร ธคป.</h3><br/>
                        <Link to={"/docopen/"+ "download/" + ID}><h5>Download</h5></Link><br/>
                    </div>
                    <div className="col s12 m5" style={{ borderStyle: 'dashed', margin: 10 }}>
                        <h3>เอกสารเปิด Cost center</h3><br/>
                        <Link to={"/docopencost/"+ "download/" + ID}><h5>Download</h5></Link><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CostCenter