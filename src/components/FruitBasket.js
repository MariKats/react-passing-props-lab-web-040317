import React from 'react';

import FilteredFruitList from './FilteredFruitList.js';
import Filter from './Filter.js';

  const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">

        <Filter filters={props.filters} currentFilter={props.currentFilter} handleChange={props.handleFilterChange} />

        <FilteredFruitList filter={props.currentFilter} fruit={props.fruit}/>

      </div>
    );
  }

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function(){}
}

export default FruitBasket;
