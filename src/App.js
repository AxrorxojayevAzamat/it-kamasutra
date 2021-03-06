import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Switch, withRouter, Route, BrowserRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import withSuspense from "./hoc/withSuspence";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path='/'
                               render={withSuspense(ProfileContainer)}/>
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                        <Route exact path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route exact path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route exact path='/login'
                               render={() => <LoginPage/>}/>
                        <Route path='*'
                               render={() => <div>404 not found page</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJS = () => <BrowserRouter>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
</BrowserRouter>

export default SamuraiJS;