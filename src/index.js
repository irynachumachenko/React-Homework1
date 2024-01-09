import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import UserInfoContext from "./context/UserInfoContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <UserInfoContext>
        <BrowserRouter>
            <App root={root}/>
        </BrowserRouter>
    </UserInfoContext>
);