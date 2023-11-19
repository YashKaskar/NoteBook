import React, { useState } from 'react'
import Header from "./Header/Header"
import "./App.css";

import ContentContainer from './MainContent/ContentContainer/ContentContainer';
import UpperBar from './MainContent/UpperBar/UpperBar';
import { useState } from "react";



function App() {
  
  const [note, setNote] = useState([
      {
      text: 'Yash',
      time: '3.00',
      color:'magenta'
      },
      {
      text: 'Manish',
      time: '4.50',
      color:'cyan'
      },
      {
      text: 'Darshan',
      time: '10.10',
      color:'orange'
      },
      {
      text: 'Divyesh',
      time: '11.00',
      color:'grey'
      }
  ])

  const add = (color) => {  
    const notes = [...note];
    notes.push({
      text: "",
      time: Date.now(),
      color,
    });
    setNote = (notes);
  }

  return (
    <>
      <Header />
      <UpperBar add={add} />
      <ContentContainer note={note} /> 
    </>
  )
}

export default App
