import React from 'react'
import Card from './Card'
import { useRef } from 'react'

const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      fileSize: ".7mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {
      desc: "Lorem ipsum sit amet, consectetur adipisicing.",
      fileSize: ".4mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"}
    },
    {
      desc: "Lorem ipsum dolor sit amet, adipisicing.",
      fileSize: ".3mb",
      close: true,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"}
    }
  ]

  const ref = useRef(null)

  return (
    <div ref={ref} className='fixed p-5 top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
      {data.map( (item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground