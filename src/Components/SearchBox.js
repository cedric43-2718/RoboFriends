import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className="pa2">
            <input class="pa3 ba b--green bg-lightest-blue" type="search" onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;