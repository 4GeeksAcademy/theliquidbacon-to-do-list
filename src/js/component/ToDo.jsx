import React, { useState } from "react";


const ToDo = () => {
    const [task, setTask] = useState(["Hacer la cama", "Lavarme las manos", "Comer", "Pasear al perro"]);
    const [text, setText] = useState("");


    const addTask =(e) =>{
        if (e.key === "Enter" && text !== " ") {
            setTask([...task, text]) 
            setText("");
        }
    } 

    const deletetask = (item) => {
        setTask(task.filter((task) => task != item))
    }
    
    return (
        <div className= "container" style={{ width: 750, backgroundColor: "#5ac66a", padding: 50, fontSize: 20, fontFamily:"sans-serif"}}>
            <div><h1 style={{ color: "#be3636", textAlign: "center", fontSize: 85 }}>To Do</h1></div>

            <div className= "list-group" >
                <input className= "list-group-item" type= "text" value= {text} 
                    placeholder= "Añadir tareas..." 
                    onChange= {(e) => {setText(e.target.value)}}
                    onKeyDown= {addTask}>
                </input>

                <div> {task.map((task, item) => (
                        <li className= "list-group-item" 
                            style= {{paddingLeft: 15, color: "#d43930", display: "flex", justifyContent: "space-between"}} key={item}>{task}
                            <button type= "button" onClick={() => deletetask(task)}>X</button>
                        </li>
                    ))} 
                </div>
            </div>
            <div style= {{ color: "#212529a6", textAlign: "inherit", fontSize: 15 }}>
                {task.length} Tareas Pendientes
            </div>
        </div>
    )
}
export default ToDo;