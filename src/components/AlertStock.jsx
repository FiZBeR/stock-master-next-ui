import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import {Button, ButtonGroup} from "@nextui-org/button";

export const AlertStock = ({producto, cantidad}) => {

    const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{producto}</h4>
            <h5 className="text-small tracking-tight text-default-400">{cantidad} Unidades</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="warning"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Ohhh" : "Alerta"}
        </Button>
    </CardHeader>
  )
}
