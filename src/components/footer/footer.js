import { Component } from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../task-filter/task-filter';
import './footer.css';

export default class Footer extends Component {
    static defaultProps = {
        itemsLeft: 0,
        filter: 'All',
    };

    static propTypes = {
        itemsLeft: PropTypes.number,
        changeFilter: PropTypes.func.isRequired,
        filter: PropTypes.string,
        deleteAllCheckedTasks: PropTypes.func.isRequired,
    };

    render() {
        const { itemsLeft, changeFilter, filter, deleteAllCheckedTasks } = this.props;

        return (
            <footer className="footer">
                <span className="todo-count">{`${itemsLeft} items left`}</span>
                <TaskFilter filter={filter} changeFilter={changeFilter} />
                <button onClick={deleteAllCheckedTasks} className="clear-completed" type="button">
                    Clear completed
                </button>
            </footer>
        );
    }
}
