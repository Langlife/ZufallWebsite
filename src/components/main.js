import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import { Route } from 'react-router-dom';
import Activity  from "./Activity";
import Logout  from "./Logout";
import Schedule  from "./Schedule";
import Account_Settings from "./Account_Settings";

const Main = () => (
    <Switch>
        <Route exact path = "/"/>
        <Route path = "/Activity" component = {Activity} /> 
        <Route path = "/Logout" component = {Logout} />
        <Route path = "/Schedule" component = {Schedule} />
        <Route path = "/Account_Settings" component = {Account_Settings} />
    </Switch>
)

export default Main;