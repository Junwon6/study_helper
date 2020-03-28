import React, { Component } from 'react';
import './ToggleButton.css'

class ToggleButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            on: false
        }
    }

    toggle = () => {
        if (this.state.on) {
            this.setState({
                on: false
            })
        }
        else {
            this.setState({
                on: true
            })
        }
        console.log(this.state.on);
    }

    render() {
        const { value } = this.props;
        const { toggle } = this;
        return (
            <div className={"toggle_button_wrapper " + (this.state.on ? 'btn-on' : 'btn-off')} onClick={ toggle }>{ value }</div>
        )
    }
}

export default ToggleButton;