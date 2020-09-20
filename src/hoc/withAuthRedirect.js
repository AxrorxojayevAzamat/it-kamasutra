import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapToStatePropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props}/>
        }
    }
    return connect(mapToStatePropsRedirect)(RedirectComponent);
}

export default withAuthRedirect;
