import './Header.css'
import Logo from '../files/logo-empresa.png'
import React from 'react'

export default props => {
    return(
        <div className='Header'>
           <img src={Logo} alt='Logo da Empresa'/>
        </div>
    )
}