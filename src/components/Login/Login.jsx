import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControl/FormControl";
import {required} from "../../utils/validations/validate";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormControl/FormControl.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [required])}
            {createField("Password", "password", Input, [required], {type: "password"})}
            {createField(null, "rememberMe", Input, [ ], {type: "checkbox", text: "remember me"} )}
            {error && <div className={style.formError}>
                {error}
            </div>
            }
            { captchaUrl && <img src={captchaUrl} alt={""} />}
            { captchaUrl && createField("captcha code", "captchaUrl", Input, [])}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({isAuth, login, captchaUrl}) => {
    const onSubmit = (values) => {
        let {email, password, rememberMe, captchaUrl} = values
        login(email, password, rememberMe, captchaUrl)
    }

    if (isAuth) return <Redirect to={`/profile`}/>

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);