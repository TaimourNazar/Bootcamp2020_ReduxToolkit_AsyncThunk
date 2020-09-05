import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {increment,decrement,incrementByValue, SelectCount} from '../store/counterSlice';

function Counter() {
  const [value, setValue]=useState(0);
  const dispatch=useDispatch();
  const counter=useSelector(SelectCount);
  /*const counter=useSelector((state)=>{
    return state.counter.count
  });
  */
  return (
    <div>
      <div>Counter: {counter} </div>
      <div>
        <button onClick={()=>{
          dispatch(increment());
        }}>Increment</button>
      </div>
      <div>
        <button onClick={()=>{
          dispatch(decrement());
        }}>Decrement</button>
      </div>
      <div>
        <input type="text" onChange={(e)=>{
          setValue(e.target.value);
        }}/>
        <br/>
        <button onClick={()=>{
          dispatch(incrementByValue(Number(value)));
        }}>Increment By Value</button>
      </div>
    </div>
  );
}

export default Counter;