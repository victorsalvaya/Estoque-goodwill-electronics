import './Tabela.css'
import React from 'react'

import InputProdutos from './InputProdutos'

export default class Tabela extends React.Component {
    
    state = {
        produtoNome: '',
        produtoQntd: '',
        produtoPreco: '',
        produtoTotal: 0,
        act: 0,
        index: '',
        datas: [],
    }

    componentDidMount = () => {
        this.focusForm()
    }

    setProdutoNome = (nome) => {
        this.setState({
            produtoNome: nome
        })
    }

    setProdutoQuantidade = (quantidade) => {
        this.setState({
            produtoQntd: quantidade
        })
    }

    setProdutoPreco = (preço) => {
        this.setState({
            produtoPreco: preço
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        
        const inputNome =  document.querySelector('#inputProduto')
        const inputQntd = document.querySelector('#inputQuantidade')
        const inputPreço = document.querySelector('#inputPreço')

        // Testando o valor do input vazio!

        if(!inputNome.value){
           return inputNome.classList.add('bgErro')
        } else {
            inputNome.classList.remove('bgErro')
        }

        if(!inputQntd.value){
            return inputQntd.classList.add('bgErro')
        } else {
            inputQntd.classList.remove('bgErro')
        }

        if(!inputPreço.value){
            return inputPreço.classList.add('bgErro')
        } else {
            inputPreço.classList.remove('bgErro')
        }

        let datas = this.state.datas
        let produtoNome = this.state.produtoNome
        let produtoQntd = this.state.produtoQntd
        let produtoPreco = this.state.produtoPreco
        let totalProduto = produtoQntd * produtoPreco
        let index = this.state.index
        
        if(this.state.act === 0){ // New
            let data = {
                produtoNome, 
                produtoQntd,
                produtoPreco,
                totalProduto,
            }
            datas.push(data)
        }else {                 // update
            datas[index].produtoNome = produtoNome      
            datas[index].produtoQntd = produtoQntd      
            datas[index].produtoPreco = produtoPreco    
            datas[index].totalProduto = produtoQntd * produtoPreco        
        }
                
        this.setState({
            datas: datas,
            act: 0
           })
        
        this.limparForm()
        this.focusForm()

        let btn = document.querySelector('.btnStyle')
        btn.classList.remove('btnEditar')

    }

    BtnApagar = (i) => {
        let datas = this.state.datas;
        datas.splice(i,1);
        this.setState({
            datas: datas
         })
    }

    limparForm = () => {
        let form = document.querySelector('.myForm')
        form.reset()
    }

    focusForm = () => {
        let inputNome = document.querySelector('input')
        inputNome.focus()
    }
    
    editarTabela = (i) => {  
        let btn = document.querySelector('.btnStyle')
        btn.value = 'Editar' 
        btn.classList.add('btnEditar')
        
        let data = this.state.datas[i]
    
        this.setState({
            act: 1,
            index: i,
        })
        
        let produtoNomeValue = document.querySelector('#inputProduto')
        let produtoQntdValue = document.querySelector('#inputQuantidade')
        let produtoPrecoValue = document.querySelector('#inputPreço')
        

        produtoNomeValue.value = data.produtoNome
        produtoQntdValue.value = data.produtoQntd
        produtoPrecoValue.value = data.produtoPreco  
        
    }
 
    render(){
        let datas = this.state.datas;
        return(
            <div>
                <InputProdutos handleSubmit={this.handleSubmit} setNome={this.setProdutoNome} setQntd={this.setProdutoQuantidade} edit={this.editarTabela} setPreço={this.setProdutoPreco} />
                <div className="tabelaProdutos">
                    <table border='1'>
                        <thead>
                            <tr style={{backgroundColor: "#fff200"}}>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Preço</th>
                                <th>Total</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        
                            {datas.map((data,i) =>
                                <tbody key={i}>
                                    <tr>
                                        <td>{i+1}</td>
                                        <td className='teste'>{data.produtoNome}</td>
                                        <td className='teste'>{data.produtoQntd}</td>
                                        <td className='teste'>R$ {data.produtoPreco}</td>
                                        <td>R$ {data.totalProduto}</td>
                            <td className='Editar fas fa-edit' onClick={(e) => this.editarTabela(i)}></td>
                                        <td className='Excluir fas fa-trash-alt' onClick={()=>this.BtnApagar(i)}></td>
                                    </tr>
                                </tbody>
                            )}
                    </table>
                </div>
            </div>
        )
    }
}
