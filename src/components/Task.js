import React, { Component } from 'react';
const Task = props => {

    return (
        <div>{props.isDone? <p><strong>{props.text}</strong> wykonane: {props.finish} 
        <button onClick={()=>props.clickDelete(props.id)}>X</button> </p>
         :
            <p><strong style={props.priority? {color: 'red'} : null} >{props.text}</strong> do {props.date} 
            <button onClick={()=>props.clickDone(props.id)}>Zrobione</button>
            <button onClick={()=>props.clickDelete(props.id)}>X</button></p>}
        </div>
    );
}
 
export default Task;