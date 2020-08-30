import React, {useEffect, useState} from 'react'

let baseUrl="fakeapi"

export const Todos=()=>{

    let [data, setData]=useState([]);
    /*
    useEffect(()=>{
        fetch(`${baseUrl}/getUsers`)
            .then(res=>res.json())
            .then(data=>console.log('data',data))
    })
    */
    const addTodoHandler=()=>{
        fetch(`/${baseUrl}/addTodos`,{
            method: "POST",
            body:{id:1232,text:"text"}
        }).then(res=>{
            console.log("success",res)
        }).catch(error=>{
            console.log("error addtodo",error);
        })
    }

    const getTodoHandler=()=>{
        fetch(`${baseUrl}/getTodos`)
            .then(res=>res.json())
            .then(data=>{
                setData(data.todos)
                console.log('data',data)})
    }
    return(
        <div>
            Hello from todo<br/><br/>
            <button onClick={addTodoHandler}>Add</button><br/><br/>
            <button onClick={getTodoHandler}>Get</button>
            <hr/>
            {
                JSON.stringify(data)
            }
        </div>
    )
}