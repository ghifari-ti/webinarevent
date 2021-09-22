import React from 'react';
import ReactDOM from 'react-dom';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import Index from "./Index";
import {BrowserRouter} from "react-router-dom";
import '@elastic/eui/dist/eui_theme_amsterdam_dark.css';
//import '@elastic/eui/dist/eui_theme_amsterdam_light.css';


if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <Index />
        </BrowserRouter>, document.getElementById('app'));
}
