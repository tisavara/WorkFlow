import React , { Component } from 'react'
import AddressFormTypeahead from 'react-thailand-address-typeahead'

class Address extends Component {

    constructor(props){
        super(props)
        this.state = {
            All: '',
            Address: []
        }
    }
    handleChangAddress = (e) => {
        this.setState({
            All: e.target.value + ' ' + this.state.Address.d + ' ' + this.state.Address.a + ' ' + this.state.Address.p + ' ' + this.state.Address.z
        })

        console.log(this.state.All)
    }
    render() {
        return (
            <div>
                <div className="divider"></div>
    
                <h3 className="">ที่อยู่</h3>
                <textarea onChange={this.handleChangAddress} />
                <AddressFormTypeahead onAddressSelected={(addressObject) => this.setState({
                    Address: addressObject
                })}  />
            </div>
        )    
    }
}

export default Address