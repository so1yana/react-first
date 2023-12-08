import { Component } from 'react';

import './task.css';

export default class Task extends Component {

    state = {
        editing: this.props.editing,
        text: this.props.label,
    };

    handlerInput = (event) => {
        event.preventDefault();
        this.setState({
            editing: false,
        });
        this.props.editItem(this.props.id, this.state.text);
    };

    handlerEdit = (event) => {
        event.stopPropagation();
        const parent = event.target.parentElement.parentElement.className;
        if ( parent === 'completed') return;
        return this.setState(() => ({editing: true}));
    };

    render() {

        const { id, checked, created, itemCompleted, deleteItem } = this.props;
        const { editing, text } = this.state;
        return (
            <li className={checked ? 'completed' : editing ? 'editing' : null}>
                <div className='view' onClick={ () => itemCompleted(id, !checked)}>
                    <input 
                        className='toggle' 
                        type='checkbox'
                        onChange={(event) => itemCompleted(id, event.target.checked)}
                        checked={checked}
                    />
                    <label>
                        <span className='description'>{text}</span>
                        <span className='created'>{created}</span>
                    </label>
                    <button 
                        className='icon icon-edit'
                        onClick={(event) => this.handlerEdit(event)}
                    />
                    <button 
                        className='icon icon-destroy'
                        onClick={(event) => {
                            event.stopPropagation();
                            return deleteItem(id)
                        }}
                    />
                </div>
                {editing && (
                    <form onSubmit={this.handlerInput}>
                        <input 
                            onChange={(event) => this.setState({text: event.target.value})}
                            type="text" 
                            className="edit" 
                            value={text}
                        />
                    </form>
                )}
            </li>
        );
    };
};