import React from 'react';
import { Header } from 'smart-box-ui';
import HomePage from './components/home/home-page';

class App extends React.Component {
    state = {
        isLoading: false
    };

    render() {
        const { isLoading } = this.state;

        if (isLoading) {
            return <p>cargando</p>;
        }
        return (
            <div>
                <Header>Smart Box</Header>
                <HomePage />
            </div>
        );
    }
}

export default App;
