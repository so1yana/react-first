import { Component } from 'react';
import './task-filter.css';
import PropTypes from 'prop-types';

export default class TaskFilter extends Component{

  static defaultProps = {
    filter: 'All',
  };

  static propTypes = {
    filter: PropTypes.string,
    changeFilter: PropTypes.func.isRequired,
  };

  render() {
    const { filter, changeFilter } = this.props;
    return (
      <ul className="filters">
          <li>
            <button 
              className={filter === 'All' ? 'selected' : null}
              onClick={() => changeFilter('All')}>All</button>
          </li>
          <li>
            <button 
              className={filter === 'Active' ? 'selected' : null}
              onClick={() => changeFilter('Active')}>Active</button>
          </li>
          <li>
            <button
              className={filter === 'Completed' ? 'selected' : null} 
              onClick={() => changeFilter('Completed')}>Completed</button>
          </li>
      </ul>
    );
  };
};