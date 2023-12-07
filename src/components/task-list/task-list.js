import Task from '../task';
import './task-list.css';


const TaskList = ({ todos }) => {
    
    const elements = todos.map((item) => {

        const { id, ...props } = item;

        return (
            <Task key={id} { ...props } />
        );
        
    });

    return (
        <ul className='todo-list'>
            { elements }
        </ul>
    );
};

export default TaskList;