import React from 'react'
import Card from './Card'
import { useRef } from 'react';

function Foreground() {
     const ref = useRef(null);


     const data = [
          {
               desc : "This is the background color of the card that will be displayed",
               fileSize: ".9mb",
               close: true,
               tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
          },
          {
               desc : "This is the background color of the card that will be displayed",
               fileSize: ".9mb",
               close: true,
               tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
          },
          {
               desc : "This is the background color of the card that will be displayed",
               fileSize: ".9mb",
               close: true,
               tag: {isOpen: false, tagTitle: "Upload", tagColor: "green"},
          },
     ];
  
     return (
          <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-7">
          {data.map((item, index)=>(
               <Card data={item} reference={ref}/>

          ))}
          </div>
  
  );
}

export default Foreground
