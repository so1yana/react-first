import { Component } from 'react';

import './task.css';

export default class Task extends Component {

    state = {
        editing: this.props.editing,
        text: '',
    };

    render() {

        const { id, checked, label, created, itemCompleted, deleteItem } = this.props;

        return (
            <li className={checked ? 'completed' : this.state.editing ? 'editing' : null}>
                <div className='view' onClick={ () => itemCompleted(id, !checked)}>
                    <input 
                        className='toggle' 
                        type='checkbox'
                        onChange={(event) => itemCompleted(id, event.target.checked)}
                        checked={checked}
                    />
                    <label>
                        <span className='description'>{label}</span>
                        <span className='created'>{created}</span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button 
                        className='icon icon-destroy'
                        onClick={(event) => {
                            event.stopPropagation();
                            console.log(event);
                            return deleteItem(id)
                        }}
                    />
                </div>
                {this.state.editing && (
                    <form>
                        <input type="text" className="edit" value="Editing task"></input>
                    </form>
                )}
            </li>
        );
    };
};