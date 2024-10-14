import React from 'react'
import { Menu } from '../components/Menu'
import { Home } from '../components/Home'
import { Team } from '../components/Team'
import { Edit } from '../components/Edit'
import { Crear } from '../components/Crear'
import { Inicio } from '../components/Inicio'
import { MoreSells } from '../components/MoreSells'
import { Calendario } from '../components/Calendario'
import { AllProducts } from '../components/AllProducts'
import { DetailsProduct } from '../components/DetailsProduct'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import '../rutas/RutasMain.css'


export const RutasMain = () => {
  return (
    <BrowserRouter className='pricipal'>
        <Menu/>
        <Routes>
            <Route path='/' element={<Inicio/>} >
                <Route path='/' element={<Home/>}/>
                <Route path='team' element={<AllProducts/>} />
                <Route path='calendario' element={<Calendario/>} />
                <Route path='masvendidos' element={<MoreSells/>} />
                <Route path='allProducts' element={<Team/>} />
                <Route path='crear' element={<Crear/>} />
                <Route path='product/:id' element={<DetailsProduct/>} >
                    <Route path='editar:id' element={<Edit/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
