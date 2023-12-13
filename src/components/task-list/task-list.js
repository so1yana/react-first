import { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../task';
import './task-list.css';

export default class TaskList extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checked: PropTypes.bool.isRequired,
        created: PropTypes.instanceOf(Date).isRequired,
        itemCompleted: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        editItem: PropTypes.func.isRequired,
    };

    render() {
        const { todos, itemCompleted, deleteItem, editItem } = this.props;

        const elements = todos.map((item) => (
            <Task
                key={item.id}
                itemCompleted={itemCompleted}
                deleteItem={deleteItem}
                editItem={editItem}
                {...item}
            />
        ));

        return <ul className="todo-list">{elements}</ul>;
    }
}
