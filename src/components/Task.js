import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faSquareXmark} from '@fortawesome/free-solid-svg-icons'
const check = <FontAwesomeIcon icon={faSquareCheck} />
const del = <FontAwesomeIcon icon={faSquareXmark} />
const Task = props => {

    return (
        <div>{props.isDone? <p>{props.text} Completed: {props.finish} 
        <button onClick={()=>props.clickDelete(props.text)}>{del}</button> </p>
         :
            <p><strong style={props.priority? {color: 'white'} : null} >{props.text}</strong> to {props.date} 
            <button onClick={()=>props.clickDone(props.text)}>{check}</button>
            <button onClick={()=>props.clickDelete(props.text)}>{del}</button></p>}
        </div>
    );
}
 
export default Task;