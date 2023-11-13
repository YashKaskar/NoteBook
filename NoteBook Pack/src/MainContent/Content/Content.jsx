import React from 'react'

const Content = (props) => {
  return (
    <div className='w-[280px] h-[250px] flex p-[12px] flex-col  bg-cyan-400 mt-10'>
      <textarea className='flex-[1] resize-none bg-transparent text-[1rem] outline-none border-none' />
      <p>{props.note.time}</p>
      
    </div>
 
  )
}

export default Content
