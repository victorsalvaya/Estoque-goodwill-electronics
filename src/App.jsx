import './App.css'
import React from 'react'

import Header from './componentes/Header'
import Tabela from './componentes/Tabela'

export default props => {
    return(
        <div>
           <Header />
           <Tabela />
        </div>
    )
}