'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
    const startApp = (root) => {
        ReactDOM.render(
            <App/>
            ,root)
};
// export default startApp;
startApp(document.getElementById('root'));