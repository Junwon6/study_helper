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
        const { value, changeSubjectState } = this.props;

        changeSubjectState(value, ((this.state.on) ? false : true));
        this.setState({
            on: ((this.state.on) ? false : true)
        });
    }

    render() {
        const { value } = this.props;
        const { toggle } = this;
        return (
            <div className={"toggle_button_wrapper " + (this.state.on ? 'btn-on' : 'btn-off')} onClick={toggle}>{value}</div>
        )
    }
}

export default ToggleButton;