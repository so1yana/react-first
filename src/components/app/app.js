import { Component } from 'react';
import Footer from '../footer';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';

import './app.css';

export default class App extends Component {
    state = {
        todos: [],
        filter: 'All',
    };

    makeItem = (label) => {
        const { todos } = this.state;
        let id = 1;
        if (todos.length > 0) id = todos[todos.length - 1].id + 1;
        return {
            id,
            checked: false,
            label,
            created: new Date(),
        };
    };

    addItem = (label) => {
        const oldArr = this.state.todos.map((el) => el);
        const newItem = this.makeItem(label);
        const newArr = [...oldArr, newItem];

        this.setState(() => ({ todos: newArr }));
    };

    makeNewArray = (id, value) => {
        const oldArr = this.state.todos.map((el) => el);
        const newArr = oldArr.map((elem) => {
            if (elem.id === id) {
                if (typeof value === 'string') elem.label = value;
                else if (typeof value === 'boolean') elem.checked = value;
            }
            return elem;
        });

        this.setState(() => ({
            todos: newArr,
        }));
    };

    itemCompleted = (id, checked) => {
        this.makeNewArray(id, checked);
    };

    editItem = (id, text) => {
        this.makeNewArray(id, text);
    };

    deleteItem = (id) => {
        this.setState(({ todos }) => {
            const itemId = todos.findIndex((el) => el.id === id);
            const newArray = [...todos.slice(0, itemId), ...todos.slice(itemId + 1)];
            return {
                todos: newArray,
            };
        });
    };

    deleteAllCheckedTasks = () => {
        const { todos } = this.state;
        const newArr = todos.filter((el) => !el.checked);

        this.setState({
            todos: newArr,
        });
    };

    filterItems = () => {
        const { todos, filter } = this.state;

        if (filter === 'All') return todos;

        return todos.filter((el) => {
            if (filter === 'Active') return !el.checked;
            return el.checked;
        });
    };

    changeFilter = (filter) => {
        this.setState({
            filter,
        });
    };

    render() {
        const itemsLeft = this.state.todos.reduce((acc, el) => (!el.checked ? ++acc : acc), 0);

        return (
            <section className="todoapp">
                <NewTaskForm addItem={this.addItem} />
                <TaskList
                    todos={this.filterItems()}
                    itemCompleted={this.itemCompleted}
                    deleteItem={this.deleteItem}
                    editItem={this.editItem}
                />
                <Footer
                    filter={this.state.filter}
                    changeFilter={this.changeFilter}
                    itemsLeft={itemsLeft}
                    deleteAllCheckedTasks={this.deleteAllCheckedTasks}
                />
            </section>
        );
    }
}
