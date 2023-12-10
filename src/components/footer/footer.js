import { Component } from "react";
import TaskFilter from "../task-filter/task-filter";
import './footer.css';

export default class Footer extends Component {

    render() {

        const { itemsLeft, changeFilter, filter, deleteAllCheckedTasks } = this.props;

        return (
            <footer className='footer'>
                <span className='todo-count'>{itemsLeft} items left</span>
                <TaskFilter 
                    filter={filter}
                    changeFilter={changeFilter}
                />
                <button 
                    onClick={deleteAllCheckedTasks}
                    className='clear-completed'>Clear completed</button>
            </footer>
        );
    }
};