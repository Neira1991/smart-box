import React from 'react';
import { Header } from 'smart-box-ui';
import { HomePage } from './features/home/home-page';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Header>Smart Box</Header>
                <HomePage />
            </div>
        );
    }
}
