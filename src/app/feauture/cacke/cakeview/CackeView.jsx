import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { orderd, reStocked } from '../../cacke/CackeSlice';


const CackeView = () => {
    const dispatch = useDispatch();
    const numberOfCacke = useSelector((state)=>state.cacke.numberOfCake) ;
  return (
    <div>
        <h1> Number of Cakes -{numberOfCacke} </h1>
        <button onClick={()=>dispatch(orderd())}> order cacke </button>
        <button    onClick={()=>dispatch(reStocked(10))}> Restork cake </button>
    </div>
  )
}

export default CackeView 