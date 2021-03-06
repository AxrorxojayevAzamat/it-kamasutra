import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getStatus, saveProfile, updateMainPhoto, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect"
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshPage() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userAuthId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshPage()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshPage()
        }
    }

    render() {
        return <Profile {...this.props} owner={!this.props.match.params.userId} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userAuthId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect( mapStateToProps, { getProfile, getStatus, updateStatus, updateMainPhoto, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);