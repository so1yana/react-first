import './new-task-form.css';

const NewTaskForm = () => {
    return (
        <form>
            <h1>Todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
        </form>
    );
};

export default NewTaskForm;