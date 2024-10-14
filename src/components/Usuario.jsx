import React from 'react'
import {User} from "@nextui-org/react";

export const Usuario = ({name, descripcion, avatar}) => {
  return (
    <User 
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
  )
}
