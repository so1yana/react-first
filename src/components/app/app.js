import Footer from '../footer';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';

import './app.css';

const Header = () => {
    return (
        <header className='header'>
            <h1>Todos</h1>
            <NewTaskForm />
        </header>
    );
}

const Main = () => {
    const todoData = [
        {'id': 1, 'className': 'completed', 'label': 'Completed task', 'created': '5 seconds ago'},
        {'id': 2, 'className': 'editing', 'label': 'Editing task', 'created': '4 minutes ago'},
        {'id': 3, 'className': null, 'label': 'Active task', 'created': '5 minutes ago'},
    ];

    return (
        <section className='main'>
            <TaskList todos={todoData} />
            <Footer />
        </section>
    );
}

const App = () => {

    return (
        <section className='todoapp'>
            <Header />
            <Main />
        </section>
    );
};

export default App;