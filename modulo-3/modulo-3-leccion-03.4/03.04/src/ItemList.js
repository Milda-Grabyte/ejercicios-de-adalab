import React from 'react';
import './ItemList.scss';
import Item from './Item.js';
import PropTypes from 'prop-types';
import CategoryButton from './CategoryButton.js';

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.filterItemsByCategory = this.filterItemsByCategory.bind(this);

    const filteredItems = this.props.items.filter((item) => item.price < 10);
    this.mappedItems = filteredItems.map((item) => (
        <Item name={item.name} description={item.description} quantity={item.quantity} category={item.category} price={item.price} />
    ));
  }

  // From 3.5 (ex. 8)
  filterItemsByCategory(category) {
    this.mappedItems = this.mappedItems.filter((item) => item.props.category ===  category);
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <ul className='item-list'>{this.mappedItems}</ul>
        <CategoryButton onButtonCategory={this.filterItemsByCategory} category='Cereales' />
      </>
    );
  }
}

ItemList.defaultProps = {
  description: 'No hay descripción'
};

ItemList.propTypes = {
  name: propTypes.any.isRequired,
  price: propTypes.number.isRequired,
};

export default ItemList;
