import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

const App = () => (
    <div>sss</div>
)


ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <Route>
                <App/>
            </Route>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);