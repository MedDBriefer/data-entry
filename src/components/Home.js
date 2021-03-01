import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import ScenarioForm from './ScenarioForm.js';

const HomeNoLogin = () => {
    return(
        <Router>
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
            <Switch>
                <Route exact path='/' component={HomeNoLogin} />
                <Route path='/sign-in' component={SignIn} />
                <Route path='/create-account' component={CreateAccount} />
            </Switch>
        </Router>
    );
}

const HomeLoggedIn = () => {
    return(
        <Router>
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
            <Switch>
                <Route exact path='/' component={HomeLoggedIn} />
                <Route path='/create-scenario' >
                    <ScenarioForm editMode={false} />
                </Route>
                <Route path='/edit-scenario'>
                    <ScenarioForm editMode={true} />
                </Route>
            </Switch>
        </Router>
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

export { HomeNoLogin, HomeLoggedIn };