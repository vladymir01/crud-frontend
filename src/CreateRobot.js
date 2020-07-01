import React, { Component } from 'react';

class CreateRobot extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      userName:'',
      email:''
    }
  }

  onChangeName=(event)=>{
    this.setState({name:event.target.value})
  }
  onChangeUsername=(event)=>{
    this.setState({userName:event.target.value})
  }
  onChangeEmail=(event)=>{
    this.setState({email:event.target.value})
  }

  onSubmitCreate=()=>{
    fetch('http://localhost:3003/insert', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.userName,
        name: this.state.name
      })
    })
    // .then(response => {response.json()})
     //.then(txt => {console.log(txt)  })
  }

  render(){ 
      return(
              <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4">
                  <div className="card border-info">
              <div className="card-header bg-info">Header</div>
              <div className="card-body">
                <form className="form-horizontal">
                      <p>This is the component CreateRobot</p>
                    
                       
                                  <div className="form-group row">
                                    <label className="col-form-label col-sm-2"  htmlFor="name">Name</label>
                                    <div className="col-sm-10">
                                    <input type='text' id='name' className="form-control" name='name' placeholder='Your full name' onChange={this.onChangeName} ></input>
                                  </div>
                                </div>

                                <div className="form-group row">
                                      <label className="control-label col-sm-2"  htmlFor="userName">User Name</label>
                                      <div className="col-sm-10">
                                      <input type='text'  className="form-control" id='userName' name='userName' placeholder='Your user name' onChange={this.onChangeUsername} ></input>
                                      </div>
                                </div>

                                <div className="form-group row">
                                      <label className="control-label col-sm-2"  htmlFor="email">Email</label>
                                      <div className="col-sm-10">
                                      <input type='email'  className="form-control" id='email' name='email' placeholder='your email' onChange={this.onChangeEmail}></input>
                                      </div>
                                </div>                 
                                 <div className="form-group row">
                                          <button className="btn btn-primary" onClick={()=>this.onSubmitCreate()}>Submit</button>
                                          <pre>                                </pre>
                                            
                                                       
                                          <button  className="btn btn-primary"onClick={()=>this.props.onRouteChange('home')}>BacktoHome</button>
                                   </div>          
                                  
              
                          
                    
                </form>
                       
                      </div>                     
                
                
          </div>
                  </div>
                  <div className="col-4"></div>
              </div>
            
          ) 
  }
  
    
}

export default CreateRobot;
