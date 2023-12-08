import { Component } from 'react';
import Footer from '../footer';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';

import './app.css';


export default class App extends Component {

    state = {
        todos: [
            {id: 1, editing: false, checked: true, 'label': 'Completed task', 'created': '5 seconds ago'},
            {id: 2, editing: true, checked: false, 'label': 'Editing task', 'created': '4 minutes ago'},
            {id: 3, editing: false, checked: false, 'label': 'Active task', 'created': '5 minutes ago'},
        ],
        filter: 'All',
    };

    itemCompleted = (id, checked) => {
        const newArr = this.state.todos.map((elem) => {
            if (elem.id === id) elem.checked = checked;
            return elem;
        });
        this.setState(() => ({
            todos: newArr
        }));
    };

    deleteItem = (id) => {
        this.setState(({ todos }) => {
            const itemId = todos.findIndex((el) => el.id === id);
            const newArray = [ 
                ...todos.slice(0, itemId),
                ...todos.slice(itemId + 1)
            ];
            return {
                todos: newArray
            };
        });
    };

    render() {

        return (
            <section className='todoapp'>
                <NewTaskForm />
                <TaskList 
                    todos={ this.state.todos }
                    itemCompleted={ this.itemCompleted }
                    deleteItem={ this.deleteItem }
                />
                <Footer />
            </section>
        );
    };
};
