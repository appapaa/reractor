import React, {Component} from 'react';

require('./styles.scss');

class Plugin extends Component {
    render() {
        return (
            <div className='app-f1'> Первый компонент</div>
        );
    }
}

Plugin.displayName = 'F1';
export default Plugin;
