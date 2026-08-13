import React, { useState } from 'react'

const Todo = () => {
    
    const [Tasks,setTasks]=useState(['hii'])
    const [newTasks,setNewTasks] = useState('')

    function Inpchange(e){
        setNewTasks(e.target.value)
    }

    function addTask(){
        if(newTasks.trim() !==""){
            setTasks(t=>[...t,newTasks])
            setNewTasks('')

        }
    }
    function deleteTask(index){
        setTasks(Tasks.filter((_,i)=>i!==index))

    }
    function movetaskup(index){
        if (index>0){
            const updatedtasks = [...Tasks];
            [updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]]
            setTasks(updatedtasks)
        }
    }
    
    function movetaskdown(index){
        if(index<Tasks.length-1){
             const updatedtasks = [...Tasks];
            [updatedtasks[index],updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]]
            setTasks(updatedtasks)
        }

    }
  return (
    <div className='todo'>
        <h1>To-Do-List</h1>
        <div>
            <input type="text"
            placeholder='enter a task'
            value={newTasks} 
            onChange={Inpchange}/>
            <button onClick={addTask}>Add</button>
        </div>
        <ol>
            {Tasks.map((task,index)=><li key={index}>{task} <button onClick={()=>deleteTask(index)}>Delete</button> <button onClick={()=>movetaskup(index)}>MoveUp</button> <button onClick={()=>movetaskdown(index)}>MoveDown</button></li>)}
        </ol>
      
    </div>
  )
}

export default Todo
