import React, { Component } from 'react';
import '../assets/css/LightBulb.css'
let isOn = false

class LigtBulb extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOn: true
        }
    }
    changeBulb = () => {
        if (this.state.isOn == false) {
            this.setState({ isOn: true })
        } else {
            this.setState({ isOn: false })
        }

    }
    render() {

        return (
            <div className="lightB">
                <p>Ligtbulb</p>
                <img src={this.state.isOn == true ? 'pic_bulbon.gif' : 'pic_bulboff.gif'} onClick={() => {
                    this.changeBulb()
                }} alt="bulb" className="img" />


            </div>
        );
    }
}

export default LigtBulb;