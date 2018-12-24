'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import './styles.scss';
import Loading from "./components/Loading";

const F1 = Loadable({
    loader: () => import("./components/F1" /* webpackChunkName: "f1" */),
    loading: Loading
});
const F2 = Loadable({
    loader: () => import("./components/F2" /* webpackChunkName: "f2" */),
    loading: Loading
});

window.__mainComponent = (name, root, props = {}) => {
    let C = Loading;
    switch (name) {
        case 'F1' :
            C = F1;
            break;
        case 'F2' :
            C = F2;
            break;
    }
    ReactDOM.render(
        <C {...props}/>
        , root)
};