import React from 'react'
import Content from '../Content/Content'

const ContentContainer = () => {
  return (
    <div className='h-[120%]'>
      <div className='flex flex-wrap gap-10 justify-center'>
      <Content note={{
          time: "4.24"
      }} />
      <Content note={{
          time: "4.24"
      }} />
      <Content note={{
          time: "4.24"
      }} />
      <Content note={{
          time: "4.24"
        }} />
      </div>
    </div>
  )
}

export default ContentContainer
