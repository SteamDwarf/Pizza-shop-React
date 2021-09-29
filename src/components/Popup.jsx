import React from 'react';

const Popup = ({sortOptions}) => {
    return(
        <div className="sort__popup">
            <ul>
                {sortOptions.map(option => 
                    <li key={option}>{option}</li>
                )}
            </ul>
        </div>
    );
}

export default Popup;