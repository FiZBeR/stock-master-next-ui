import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Calendar} from "@nextui-org/calendar";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import '../styles/Home.css'
import { Usuario } from './Usuario';
import { AlertStock } from './AlertStock';
import { NavLink } from 'react-router-dom';
import stock from '../assets/recibo-purple.svg'
import team from '../assets/team-purple.svg'
import {parseDate} from "@internationalized/date";

export const Home = () => {

  let [value, setValue] = React.useState(parseDate("2024-03-07"));  

  return (
    <div className='pt-[50px]'>
      <div className='sectionOne'>

        <Card className='max-w-[400px] tipeOne ml-[30px]'>
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={team}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Team Members</p>
              <p className="text-small text-default-500">Your Team</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <div className='mb-[5px]'>
              <Usuario className='user mb-[5px]'/>
            </div>
            
            <div className='mb-[5px]'>
              <Usuario className='user mb-[5px]'/>
            </div>

            <div className='mb-[5px]'>
              <Usuario className='user mb-[5px]'/>
            </div>
            
            <div className='mb-[5px]'>
              <Usuario className='user mb-[5px]'/>
            </div>
            
          </CardBody>
          <Divider/>
          <CardFooter>
            <NavLink to='team' >Administra tu equipo</NavLink>
          </CardFooter>
        </Card>
        
        <Card className="max-w-[340px] tipeSpecial">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={stock}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Stock Bajo</p>
              <p className="text-small text-default-500">Alert!!</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <AlertStock/>
            <AlertStock/>
            <AlertStock/>
          </CardBody>
          <CardFooter className="gap-3">
            
          </CardFooter>
        </Card>

        <Calendar value={value} className='tipeOne max-w-[340px]' aria-label="Date (Page Behaviour)"  pageBehavior="single" />
        
      </div>

      <div className='sectionOne'>

        <div >
          <section className=' ml-[30px]'>
            <p>Más Vendidos</p>
          </section>
          <Table aria-label="Example static collection table" className='tipeTwo ml-[30px] max-w-[430px]'>
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody className="text-black">
              <TableRow key="1">
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Zoey Lang</TableCell>
                <TableCell>Technical Lead</TableCell>
                <TableCell>Paused</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jane Fisher</TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>William Howard</TableCell>
                <TableCell>Community Manager</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className=' ml-[30px]'>
          <section>
            <p>Productos</p>
          </section>
          <Table aria-label="Example static collection table" className='tipeTwo ml-[30px] max-w-[430px]'>
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody className="text-black">
              <TableRow key="1">
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Zoey Lang</TableCell>
                <TableCell>Technical Lead</TableCell>
                <TableCell>Paused</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jane Fisher</TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>William Howard</TableCell>
                <TableCell>Community Manager</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

      </div>
    </div>
  )
}
