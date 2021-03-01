import './styles/home-styles.scss';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/sign-in' component={SignIn} />
                <Route path='/create-account' component={CreateAccount} />
            </Switch>
        </Router>
    );
}

function Home() {
    return(
        <>
            <div className="title-bar">
                <h1>MedDBriefer</h1>
            </div>
            
            <div className="nav-wrapper">
                <Link to='/sign-in'>
                    <div className="home-nav-button" >
                        Sign In
                    </div>
                </Link>
                <Link to='/create-account'>
                    <div className="home-nav-button" >
                        Create Account
                    </div>
                </Link>
            </div>
        </>
    );
}

function SignIn () {
    return (
        <h1>Sign In</h1>
    );
}

function CreateAccount () {
    return (
        <h1>Create Account</h1>
    );
}

export default App;