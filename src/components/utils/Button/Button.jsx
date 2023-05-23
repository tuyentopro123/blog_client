import React from 'react'
import "./Button.scss";
import { getAllPost } from '../../../redux/apiRequest'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {grey} from '@mui/material/colors';

const Button = ({text,handleClick,Icon}) => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

  return (
    <button 
      onClick={handleClick} 
      className={`button`} 
      >
        <Icon sx={{ fontSize: 22,color:grey[200] }}/>
        {text}
    </button>
  )
}

export default Button