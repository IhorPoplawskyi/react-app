import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onClick={this.activateEditMode}>{this.props.status || 'Whats up?'}</div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                        autoFocus={true}
                        onChange={this.onStatusChange} 
                        onBlur={this.deActivateEditMode} 
                        value={this.state.status} />
                    </div>
                } 
            </div>
        )
    }
};

export default ProfileStatus;

