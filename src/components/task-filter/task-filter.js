import { Component } from 'react';
import './task-filter.css';
import PropTypes from 'prop-types';

export default class TaskFilter extends Component {
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
                        onClick={() => changeFilter('All')}
                        type="button"
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        className={filter === 'Active' ? 'selected' : null}
                        onClick={() => changeFilter('Active')}
                        type="button"
                    >
                        Active
                    </button>
                </li>
                <li>
                    <button
                        className={filter === 'Completed' ? 'selected' : null}
                        onClick={() => changeFilter('Completed')}
                        type="button"
                    >
                        Completed
                    </button>
                </li>
            </ul>
        );
    }
}
