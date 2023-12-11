import { Component } from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
    
    static propTypes = {
        addItem: PropTypes.func.isRequired,
    };

    state = {
        value: '',
    };

    clearValue = () => {
        this.setState({
            value: '',
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.value);
        this.clearValue();
    };

    changeValue = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        return (
            <form onSubmit={(event) => this.onSubmit(event)}>
                <h1>Todos</h1>
                <input 
                    onChange={(event) => this.changeValue(event)}
                    value={this.state.value}
                    className="new-todo" 
                    placeholder="What needs to be done?" 
                    autoFocus
                />
            </form>
        );
    };
};
