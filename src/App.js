import React,{Component}from'react'
import axios from 'axios';
class App extends Component {


  constructor() {
    super()


    this.state = {
      firstname: '',
      lastname: '',
      name: '',
    }
  }

  changeHandler = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDeafult()
    this.setState({
      name: '${this.state.firstname} ${this.state.lastname}'
    })
    console.log(this.state);
  }

  render(){

    const {name} = this.state
    return(
      <div className='p-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Learn ReactJS</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className='form-label'>Firstname</label>
                      <input type="text" value={this.state.firstname} onChange={this.changeHandler} name="firstname" id="firstname" className="form-control" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastname" className='form-label'>Lastname</label>
                      <input type="text" value={this.state.lastname} onChange={this.changeHandler} name="lastname" id="flastname" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Show</button>
                  </form>
                </div>
                <div className="card-footer">
                  My name is {name ? name: '...'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
        
export default App;