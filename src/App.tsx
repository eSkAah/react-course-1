import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import {ITask} from "./Interfaces";
import TodoTask from "./components/TodoTask";

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';




const App: FC = () =>{
    const [task, setTask] = useState<string>("")
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if(event.target.name === "task"){
            setTask(event.target.value);
        }else if(event.target.name === "deadline"){
            setDeadline(Number(event.target.value));
        }
    }

    const addTask = ():void => {
        const newTask = {taskName: task, deadline: deadline};
        setTodoList([...todoList, newTask])

        setTask("");
        setDeadline(0);

    }

    return <div className="App">
        <div className="header">
            <div className="inputContainer">
                <Input
                    type="text"
                    name="task"
                    placeholder="Tasks"
                    value={task}
                    onChange={handleChange}
                />

                <Input
                    type="number"
                    name="deadline"
                    value={deadline}
                    placeholder="Deadline"
                    onChange={handleChange}
                />

            </div>
            <Button variant="contained" onClick={addTask}>Add Task</Button>
        </div>


        <div className="todoListContainer">

            <ul className="todoList">
                <h1>TO DO</h1>
                {todoList.map((task: ITask, key: number) => {
                    return <li><TodoTask key={key}  task={task} /></li>;
                })}
            </ul>

            <ul className="todoList">

            </ul>

            <ul className="todoList">

            </ul>

        </div>

    </div>;
}

export default App;