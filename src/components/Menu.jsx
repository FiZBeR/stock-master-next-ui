import React from 'react'
import home from '../assets/home-svgrepo-com.svg'
import team from '../assets/team-3-svgrepo-com.svg'
import calendar from '../assets/calendar-plus-alt-svgrepo-com.svg'
import productos from '../assets/list-ul-alt-1-svgrepo-com.svg'
import crear from '../assets/plus-circle-svgrepo-com.svg'
import ventas from '../assets/receipt-svgrepo-com.svg'
import salida from '../assets/logout-svgrepo-com.svg'
import opciones from '../assets/settings-svgrepo-com.svg'
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css'

export const Menu = () => {
  return (
    <div className='menu'>
      <div className='menuPartOne'>
        {/* <img src={logo}/> */}
      </div>
      <nav className='menuPartTwo'>
        <li className='menuItem'>
          <img src={home} className='icon'/>
          <NavLink to='/'>Inicio</NavLink>
        </li >
        <li className='menuItem' >
          <img src={team} className='icon'/>
          <NavLink to='team'>Equipo</NavLink>
        </li>
        <li className='menuItem'>
          <img src={calendar} className='icon'/>
          <NavLink to='calendario'>Calendario</NavLink>
        </li>
        <li className='menuItem'>
          <img src={productos} className='icon'/>
          <NavLink to='allProducts'>Productos</NavLink>
        </li>
        <li className='menuItem'>
          <img src={crear} className='icon'/>
          <NavLink to='crear'>Crear</NavLink>
        </li>
        <li className='menuItem'>
          <img src={ventas} className='icon'/>
          <NavLink>Más Vendidos</NavLink>
        </li>
      </nav>

      <div className='menuPartThree'>
          <img src={opciones} className='icon'/>
          <NavLink>Opciones</NavLink>
          <img src={salida} className='icon'/>
          <NavLink>Logout</NavLink>
      </div>
    </div>
  )
}
