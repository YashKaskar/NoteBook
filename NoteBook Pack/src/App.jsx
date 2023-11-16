import Header from "./Header/Header"
import "./App.css";

import ContentContainer from './MainContent/ContentContainer/ContentContainer';
import UpperBar from './MainContent/UpperBar/UpperBar';



function App() {
  
  const note = [
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
  ]

  return (
    <>
      <Header />
      <UpperBar />
      <ContentContainer note={note} /> 
    </>
  )
}

export default App
