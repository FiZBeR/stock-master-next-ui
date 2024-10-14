import React from 'react'
import {Calendar} from "@nextui-org/react";

export const Calendario = () => {
  return (
    <Calendar 
      aria-label="Date (Visible Month)" 
      visibleMonths={3} 
    />
  )
}
