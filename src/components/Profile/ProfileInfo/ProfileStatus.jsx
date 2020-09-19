import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateInput = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateInput = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    changeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render() {
        return (
            <>
                { !this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateInput}>{this.props.status || "---No status!!!---"}</span>
                </div>}
                { this.state.editMode &&
                <div>
                    <input onChange={this.changeStatus} autoFocus={true} onBlur={this.deactivateInput} value={this.state.status} type="text"/>
                </div>}
            </>
        );
    }
}

export default ProfileStatus;