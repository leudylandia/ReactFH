import React from 'react';
import ReactDOM from 'react-dom/client';
import JournalApp from './JournalApp';
import { AppRouter } from './routers/AppRouter';

import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <JournalApp/>
);