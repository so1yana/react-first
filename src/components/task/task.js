import './task.css';

const Task = ({ className, label, created }) => {

    return (
        <li className={className}>
            <div className='view'>
                <input className='toggle' type='checkbox'></input>
                <label>
                    <span className='description'>{label}</span>
                    <span className='created'>{created}</span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy'></button>
            </div>
            {className === 'editing' && (
                <form>
                    <input type="text" className="edit" value="Editing task"></input>
                </form>
            )}
        </li>
    );
};

export default Task;