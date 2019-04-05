import React from 'react';
import ReactDom from 'react-dom';

const items = ['learn react', 'build aws app'];
const TodoList = () => {
    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    );
};

const AppHeader = () => {
    return  <h1>My todo list</h1>
};

const SearchPanel = () => {
    return  <input placeholder='search'/>
};

const App = () => {

    const loginBox = <span>Log in please</span>;

    return(
        <div>
            { loginBox }
            <AppHeader/>
            <SearchPanel/>
            <TodoList />
        </div>
    );
};


ReactDom.render(<App/>,document.getElementById('root'));

