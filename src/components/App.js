import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(){
    super();
    this.fetchFilters = this.fetchFilters.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.state = {
      fruit: [],
      currentFilter: null,
      filters: []
    }
  }
  componentDidMount(){
    this.fetchFilters()
    }

    updatedFruitList() {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(fruits => this.setState({ fruit: fruits }));
    }

    fetchFilters = () => {
        fetch('/api/fruit_types')
          .then(response => response.json())
          .then(filters => this.setState({ filters: filters }));
      }

      handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ selectedFilter: event.target.value });
      }


    render(){
      return(
        <div>
          <FruitBasket filters={this.state.filters} currentFilter={this.state.currentFilter} fruit={this.state.fruit} updateFilterCallback={    this.updatedFruitList}/>
        </div>
      )
    }
  }


//  <FilteredFruitList filter={this.state.currentFilter} fruit={this.state.fruit} />
// <Filter filters={this.state.filters} currentFilter={this.state.currentFilter} handleChange={this.handleFilterChange} />
