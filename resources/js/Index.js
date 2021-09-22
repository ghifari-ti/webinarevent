import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Webinar from './Pages/Webinar';
import Sertifikat from './Pages/Sertifikat';
import WebPage from './Pages/WebPage';
import Login from './Pages/Admin/Login';


function Index() {
    return (
        <main style={{height: '100%'}}>
            <Router>
                <Route path="/" component={Welcome} exact/>
                <Route path="/webinar" component={Webinar}/>
                <Route path="/sertifikat" component={Sertifikat}/>
                <Route path="/e/:id_event" component={WebPage}/>
                <Route path="/admin/login" component={Login} />
            </Router>
        </main>
    );
}

export default Index;


