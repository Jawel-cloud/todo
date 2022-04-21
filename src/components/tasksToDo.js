import React, { useState } from 'react';
import Task from './Task';
const TasksToDo = () => {
    const [tasks,setTasks] = useState([
        {
            id:1,
            text:'Make a task1',
            date:'2022-10-20',
            priority:true,
            isDone:false,
            finishDate: null
        },
        {
            id:2,
            text:'task 2',
            date:'2022-10-22',
            priority:false,
            isDone:false,
            finishDate: null
        },
        {
            id:3,
            text:'100 words',
            date:'2021-10-31',
            priority:false,
            isDone:false,
            finishDate: null
        },
        {
            id:4,
            text:'Youtube video',
            date:'2021-10-31',
            priority:false,
            isDone:false,
            finishDate: null
        }
    ]);

    const [counter,setCounter] = useState(5);
    const [taskText, setTaskText] = useState('');
    const [taskDate, setTaskDate] = useState('Data.....'); //new Date().toISOString().slice(0,10)
    const [taskPrior, setTaskPrior] = useState('');
    const newTask = {
        id:counter,
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
    setCounter(counter+1);
}
const handleDate=(e)=>{
    setTaskDate(e.target.value);
}





    const time = new Date()
    const handleDone=(id)=>{
        console.log('Zrobiony task o id '+ id);
        const myTasks = [...tasks];
        myTasks.forEach(task=>task.id===id? 
            (task.isDone=true, task.finishDate=time.toLocaleString('pl-PL')) : null);
        setTasks(myTasks);
        console.log(time.toLocaleString('pl-PL'));
    }
    const handleDelete=(id)=>{
        const myTasks = [...tasks];
        const index = tasks.findIndex(task=>task.id===id);
        myTasks.splice(index,1);
        setTasks(myTasks);
    }

    const activeTasks = tasks.filter(task=>task.isDone===false);
    const doneTasks = tasks.filter(task=>task.isDone===true);
    const currentTasks = activeTasks.map(task=><Task id={task.id} text={task.text} date={task.date} 
    priority={task.priority} isDone={task.isDone} clickDone={handleDone} clickDelete={handleDelete}/>);
    const previousTasks = doneTasks.map(task=><Task id={task.id} text={task.text} date={task.date} 
        isDone={task.isDone} finish={task.finishDate} clickDelete={handleDelete}/>);
    return (
        <>
        <div className="addTask">
            <h3>Dodaj zadania: </h3>
            {/* <form> */}
                <input placeholder='Dodaj zadanie' onChange={handleInputChange}></input>
                <label for='inputcheck'>Priorytet</label>
                <input type='checkbox' id='inputcheck' onChange={handlecheckbox}></input>
                <br/>
                <label for='inputDate'>Do kiedy zrobić?</label>
                <input type='date' id='inputDate' min='2021-10-20' max='2121-10-20'
                onChange={handleDate}></input>
                <button onClick={handleAddTask}>Dodaj</button>
            {/* </form> */}
        </div>

        <h1>Zadania do zrobienia:</h1>
        {currentTasks}
        <h2>Zadania zrobione</h2>
        {previousTasks}
        </>
    );
}
 
export default TasksToDo;