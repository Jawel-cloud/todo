import React, { useState } from 'react';
import Task from './Task';

import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus} from '@fortawesome/free-solid-svg-icons'
const add = <FontAwesomeIcon icon={faSquarePlus} />

const TasksToDo = () => {
    const tasksBasic=[
        {text:'Make a task 1', date:'2022-10-20', priority:true, isDone:false, finishDate: null},
        {text:'Make a task 2', date:'2022-11-22', priority:false, isDone:false, finishDate: null},
        {text:'Complete task 1', date:'2022-10-22', priority:true, isDone:false, finishDate: null},
        {text:'task 0', date:'2022-10-22', priority:false, isDone:true, finishDate: null},
    ];
    let storageTasks = localStorage.getItem("storageTasks") !== null? JSON.parse(localStorage.getItem('storageTasks')): tasksBasic;
    const [tasks,setTasks] = useState(storageTasks);
    const [taskText, setTaskText] = useState('');
    const [taskDate, setTaskDate] = useState('Data.....'); //new Date().toISOString().slice(0,10)
    const [taskPrior, setTaskPrior] = useState('');
    const newTask = {
        text: taskText,
        date: taskDate,
        priority: taskPrior,
        isDone:false,
        finishDate: null
    }

const handleInputChange = (e)=>{
    setTaskText(e.target.value);
}
const handlecheckbox =(e)=>{
    setTaskPrior(!taskPrior);
}
const handleAddTask =()=>{
    const myTasks = [...tasks];
    myTasks.push(newTask);
    setTasks(myTasks);
    window.localStorage.clear();
    window.localStorage.setItem('storageTasks', JSON.stringify(myTasks));
}
const handleDate=(e)=>{
    setTaskDate(e.target.value);
}





    const time = new Date()
    const handleDone=(text)=>{
        const myTasks = [...tasks];
        myTasks.forEach(task=>task.text===text? 
            (task.isDone=true, task.finishDate=time.toLocaleString('pl-PL')) : null);
        setTasks(myTasks);
        window.localStorage.clear();
        window.localStorage.setItem('storageTasks', JSON.stringify(myTasks));
    }
    const handleDelete=(text)=>{
        const myTasks = [...tasks];
        const index = tasks.findIndex(task=>task.text===text);
        myTasks.splice(index,1);
        setTasks(myTasks);
        window.localStorage.clear();
        window.localStorage.setItem('storageTasks', JSON.stringify(myTasks));
    }

    const activeTasks = tasks.filter(task=>task.isDone===false);
    const doneTasks = tasks.filter(task=>task.isDone===true);
    const currentTasks = activeTasks.map(task=><Task key={task.text} text={task.text} date={task.date} 
    priority={task.priority} isDone={task.isDone} clickDone={handleDone} clickDelete={handleDelete}/>);
    const previousTasks = doneTasks.map(task=><Task key={task.text} text={task.text} date={task.date} 
        isDone={task.isDone} finish={task.finishDate} clickDelete={handleDelete}/>);
    return (
        <>
        <div className='mainSite'>
            <div className='columnFirst'>
                <div className="addTask">
                        <h3>Add tasks: </h3>
                        <input placeholder='Add new task' onChange={handleInputChange}></input>
                        <label htmlFor='inputcheck'>Priority</label>
                        <input type='checkbox' id='inputcheck' onChange={handlecheckbox}></input>
                        <br/>
                        <label htmlFor='inputDate'>Dead line?</label>
                        <input type='date' id='inputDate' min='2021-10-20' max='2121-10-20'
                        onChange={handleDate}></input>
                        <button onClick={handleAddTask}>{add}</button>
                </div>
                <div className='completedTasks'>
                <h3>Completed</h3>
                {previousTasks}
                </div>
            </div>
            <div className='columnSecond'>
                <h1>To Do:</h1>
                {currentTasks}
            </div>
            <div className='columnThird'>
            <div className='checklistImg'></div>
            </div>
        </div>
        </>
    );
}
 
export default TasksToDo;