

// To run this project 
// command----  npm run start:dev

import React from 'react'
import Home from "../src/components/pages/Home"
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Adduser from './components/pages/users/Adduser';
import EditUser from './components/pages/users/EditUser';
import Users from './components/pages/users/Users';


const App = () => {
    return (
        <>
            <Router>
                <div className='App'>
                    <Navbar />

                    <Switch>
                        <Route exact path="/" component={Home} />
        
                        <Route exact path="/users/add" component={Adduser} />
                        <Route exact path="/users/edit/:id" component={EditUser} />
                        <Route exact path="/users/:id" component={Users} />
                       
                    </Switch>
                </div>
            </Router>
        </>
    )
}
export default App;
