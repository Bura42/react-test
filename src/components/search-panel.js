import React from 'react';

const SearchPanel = () => {

    const searchText = 'type here to search';
    const searchStylr = {
        fontSize: '20px'
    };

    return  <input
        style={searchStylr}
        placeholder={searchText}
        className="foo"/>
};

export default SearchPanel;