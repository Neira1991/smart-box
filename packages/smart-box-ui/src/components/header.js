import React from 'react';

export class Header extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <h1 style={{ color: 'red' }}>{children}</h1>
            </div>
        );
    }
}
