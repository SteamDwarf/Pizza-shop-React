import React from "react";

const Categories = ({categories}) => {
    return (
        <div className="categories">
            <ul>
                {categories.map(categ => 
                    <li key={categ}>{categ}</li>
                )}
            </ul>
        </div>
    );
}

export default Categories;