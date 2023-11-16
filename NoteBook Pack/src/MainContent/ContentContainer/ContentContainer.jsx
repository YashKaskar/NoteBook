import React from 'react'
import Content from '../Content/Content'

const ContentContainer = (props) => {
  return (
    <div className='h-[120%]'>
      <div className='flex flex-wrap gap-10 justify-center'>
        {props.note.map((item, index) => <Content key={index} note={item} />)}
      </div>
    </div>
  )
}

export default ContentContainer
