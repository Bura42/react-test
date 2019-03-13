import React from 'react';
import ReactDom from 'react-dom';

const el = (
    <div>
        <h1>My todo list</h1>
        <input placeholder='search'/>
        <ul>
            <li>Learn react</li>
            <li>build some st </li>
        </ul>
    </div>
);

    console.log(el);
ReactDom.render(el,document.getElementById('root'));