import React, {Component} from 'react';
import Loadable from 'react-loadable';
import './App.css';
import Appa2 from "./components/Appa2";
const AsyncAppa = Loadable({
    loader: () => import("./components/Appa" /* webpackChunkName: "appa" */),
    loading: Appa2
});
class App extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        };
        setTimeout(() => this.setState({visible: true}), 3000);
    }

    render() {
        const {visible} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {visible && <AsyncAppa/>}
            </div>
        );
    }
}

export default App;
