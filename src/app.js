/**
 * @file Wrapper component that renders components from src/components.
 */

import React from 'react';
import { WelcomePage } from 'src/components';
import './app.scss';

if (!window.Intl)
    window.Intl = require('intl');

/**
 * Renders App component.
 * @return {ReactElement} HelloWorld component
 */
const App = () =>
    <WelcomePage />;

export default App;
