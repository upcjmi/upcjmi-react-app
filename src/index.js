/**
 University Placement Cell online Job/Internship portal (upcjmi-react-app).
 Copyright (C) 2019  University Placement Cell, Jamia Millia Islamia

 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to University Placement Cell
 3rd Floor, Faculty of Engineering & Technology Building
 Jamia Millia Islamia, New Delhi - 110025

 University Placement Cell, hereby disclaims all copyright interest in the program
 `upcjmi-react-app' is written by Faisal Manzer.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
