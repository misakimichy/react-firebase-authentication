import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import HomePage from '../Home'
import AccountPage from '../Account'
import AdminPage from '../Admin'
import * as Routes from './../../constants/routes'

const App = () => {
    return(
        <Router>
            <div>
                <Navigation />
                <hr />
                <Route exact path={Routes.LANDING} component={LandingPage} />
                <Route path={Routes.SIGN_UP} component={SignUpPage} />
                <Route path={Routes.SIGN_IN} component={SignInPage} />
                <Route path={Routes.PASSWORD_FORGET} component={PasswordForgetPage} />
                <Route path={Routes.HOME} component={HomePage} />
                <Route path={Routes.ACCOUNT} component={AccountPage} />
                <Route path={Routes.ADMIN} component={AdminPage} />
            </div>
        </Router>
    )
}

export default App