import React from 'react'
import { Outlet } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className="w-[940px] h-[700px] bg-gray-300 rounded-r-lg">
        <Outlet/>
    </div>
  )
}
