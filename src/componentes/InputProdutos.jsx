import './InputProdutos.css'
import React from 'react'

export default props => {
     
  
    return(
        <div className='Dados'>
            <form className="myForm" action="submit" onSubmit={props.handleSubmit}>
                <input type="text" placeholder='Nome do Produto' id="inputProduto" className='inputStyle' onChange={(e) => props.setNome(e.target.value)}/>
                <input type="text" placeholder='Quantidade' id="inputQuantidade" className='inputStyle' onChange={(e) => props.setQntd(e.target.value)} />
                <input type="text" placeholder='Preço' id="inputPreço" className='inputStyle' onChange={(e) => props.setPreço(e.target.value)}/>
                <input className='btnStyle' type="submit" value="Enviar"></input>
           </form>
        </div>  
    )    
}