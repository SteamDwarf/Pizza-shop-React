import React from 'react';
import Categories from './Categories';
import SortBlock from './SortBlock';

const VieweOption = () => {
    return (
        <div className="content__top">
            <Categories 
                categories={['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']}
            />
            <SortBlock />
        </div>
    )
}

export default VieweOption;