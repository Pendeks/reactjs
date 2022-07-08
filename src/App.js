import React,{Component}from'react'
class App extends Component{
  constructor() {
    super()

    this.state = {
      name: 'Asen'
    }
  }
    render(){
      const name = this.state.name
      return(
      <div>
        <div>My name is {name}</div>
      </div>
      )
    }
  }
        
export default App;