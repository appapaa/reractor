import React, {Component} from 'react';

require('./styles.scss');

class Plugin extends Component {
    render() {
        return (
            <div className='app-f2'> Второй компонент</div>
        );
    }
}

Plugin.displayName = 'F2';
export default Plugin;
