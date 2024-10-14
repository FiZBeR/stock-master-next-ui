import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import dot from '../assets/dot.png'
import '../styles/HeaderCard.css'

export const HeaderCard = ({titulo, imagen}) => {
  return (
    <div className='div-header flex gap-3'>
        <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={imagen}
              width={40}
              className='icon-header'
        />
        <div className="flex flex-col">
          <p className="text-md">{titulo}</p>
        </div>
        {/* <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={dot}
              width={40}
              className='dot'
        /> */}
    </div>
  )
}
