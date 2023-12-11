import { Component } from 'react';
import Task from '../task';
import './task-list.css';
import PropTypes from 'prop-types';


export default class TaskList extends Component {

    static defaultProps = {
        todos: {},
    };

    static propTypes = {
        todos: PropTypes.any,
        checked: PropTypes.bool,
        created: PropTypes.instanceOf(Date),
        itemCompleted: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        editItem: PropTypes.func.isRequired,
    };

    render() {
        
        const { todos, itemCompleted, deleteItem, editItem } = this.props;

        const elements = todos.map((item) => {

            return (
                <Task 
                    key={item.id} 
                    itemCompleted={itemCompleted} 
                    deleteItem={deleteItem} 
                    editItem={editItem}
                    { ...item } 
                />
            );
            
        });

        return (
            <ul className='todo-list'>
                { elements }
            </ul>
        );
    };
};