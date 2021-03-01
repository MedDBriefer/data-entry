import './styles/home-styles.scss';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import InterventionForm from './components/InterventionForm';
import ScenarioForm from './components/ScenarioForm';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/scenario-form' component={ScenarioForm} />
                <Route path='/intervention-form' component={InterventionForm} />
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
                <Link to='/scenario-form'>
                    <div className="home-nav-button" >
                        Scenario Form
                    </div>
                </Link>
                <Link to='/intervention-form'>
                    <div className="home-nav-button" >
                        Intervention Form
                    </div>
                </Link>
            </div>
        </>
    );
}

export default App;