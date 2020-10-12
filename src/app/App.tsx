import React from 'react';
import './App.css';
import {TasksContainer} from "../components/Tasks/TasksContainer";

export const App: React.FC = () => {
    return (
        <div className="App">
            <TasksContainer />
        </div>
    );
}

export default App;
