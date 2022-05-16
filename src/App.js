import React from 'react';
import './app.css';
import {useState} from 'react'
function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState(' ')
  return (
    <div className="row mt-5">
      <div className="col-12 mb-5">
        <h1 className="text-center">TODO LIST</h1>
      </div>
      <div className="col-12 mb-5 pb-5 container ">
        <h2 className="text-center">Create ToDo</h2>
        <div className="input container text-center">
          <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false,deletd:false}])} className="fas fa-plus"></i>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <h2 className="text-center">Active ToDo</h2>
        <div className="todos">
          {toDos.map((obj)=>{
            if(obj.deletd===false&&obj.status===false){
              return(
                <div className="todo">
              <div className="left">
                <input onChange={
                  (e)=>{
                    setTodos(toDos.filter(obj2=>{
                      if(obj2.id===obj.id){
                        obj2.status=e.target.checked
                      }
                      return obj2
                    }))
                  }
                }
                value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={(e)=>{
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.deletd=true
                    }
                    return obj2
                  }))
                }} className="fas fa-times"></i>
              </div>
            </div>
              )
            }
            return null
          })}
          
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <h2 className="text-center">Completed ToDo</h2>
        <div className="todos">
          {toDos.map((obj)=>{
            if(obj.status){
            return(
              <div className="todo">
              <div className="left">
                
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={(e)=>{
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.status=false
                    }
                    return obj2
                  }))
                }} className="fas fa-undo"></i>
              </div>
            </div>
              )
            }
            return null
          })}
          </div>
      </div>
      <div className="col-12 col-lg-4">
        <h2 className="text-center">Deletd ToDo</h2>
          <div className="todos">
          {toDos.map((obj)=>{
            if(obj.deletd){
            return(
              <div className="todo">
              <div className="left">
                
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={(e)=>{
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.deletd=false
                    }
                    return obj2
                  }))
                }} className="fas fa-undo"></i>
              </div>
            </div>
              )
            }
            return null
          })}
          </div>
      </div>
    </div>
  );
}

export default App;
