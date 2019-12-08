import React from 'react';
import { render } from 'react-dom';
import Home from './scenes/Home';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const target = document.getElementById('root');
render(<Home />, target);
