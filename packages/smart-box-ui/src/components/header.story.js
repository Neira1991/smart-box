import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './header';

storiesOf('Header', module).add('Header del sitio', () => (
    <Header>React Template</Header>
));
