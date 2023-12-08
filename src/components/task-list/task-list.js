import { Component } from 'react';
import Task from '../task';
import './task-list.css';


export default class TaskList extends Component {

    render() {
        
        const { todos, itemCompleted, deleteItem } = this.props;

        const elements = todos.map((item) => {

            return (
                <Task key={item.id} itemCompleted={itemCompleted} deleteItem={deleteItem} { ...item } />
            );
            
        });

        return (
            <ul className='todo-list'>
                { elements }
            </ul>
        );
    };
};