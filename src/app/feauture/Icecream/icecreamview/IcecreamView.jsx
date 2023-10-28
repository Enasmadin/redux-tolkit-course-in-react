import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { orderd, restocked } from '../IcecreamSlice';


const IcecreamView = () => {
    const numberOfIccream = useSelector((state)=>state.icecream.numberOfIcKream) ;
    const dispatch = useDispatch();
  return (
    <div>
        <h1> Number of icecream - {numberOfIccream} </h1>
        <button onClick={()=>dispatch(orderd())}> order icecream </button>
        <button onClick={()=>dispatch(restocked(5))}> Restork icecream </button>
    </div>
  )
}

export default IcecreamView