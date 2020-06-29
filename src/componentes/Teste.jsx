import React from 'react'



class Teste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         title: 'Simple Crud',
         index: '',
         datas: []
        };
    
        
      }
    
      componentDidMount(){
        this.refs.name.focus()
      }

      fSubmit = (e) => {
        e.preventDefault()

        let datas = this.state.datas
        let name = this.refs.name.value
        let adress = this.refs.adress.value

        let data = {
          name, adress
        }

        datas.push(data)

        this.setState({
          datas: datas
         })

         this.refs.myForm.reset()
         this.refs.name.focus()
        
      }


    
      render() {
        let datas = this.state.datas;
        return (
          <div className='Teste'>
            <h2>{this.state.title}</h2>
            <form ref='myForm' className='myForm'>
              <input type="text" ref='name' placeholder='Digite Seu Nome' className='formField'/>
              <input type="text" ref='adress' placeholder='Digite Seu endereço' className='formField'/>
              <button onClick={this.fSubmit} className='myButton'>Submit</button>
            </form>
            <pre>
              {datas.map((data,i) =>
                <li key={i} className='My List'>
                  {i+1}. {data.name}, {data.adress}
                </li>
              )}
            </pre>
          </div>
        );
      }
}



export default Teste