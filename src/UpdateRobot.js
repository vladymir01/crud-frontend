//import React from 'react';
import React, { Component } from 'react';

class UpdateRobot extends Component {
      constructor(props){
            super(props);
            this.state={
                  newName:'',
                  newUserName:'',
                  newEmail:''
            }
      }

      onChangenewName=(e)=>{this.setState({newName:e.target.value})}
      onChangenewUserName=(e)=>{this.setState({newUserName:e.target.value})}
      onChangenewEmail=(e)=>{this.setState({newEmail:e.target.value})}

      onSubmitUpdate=()=>{
             fetch('http://localhost:3003/update/'+ this.props.memberChoosen.member_id, {
                  method: 'post',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({
                                          email: this.state.newEmail,
                                          username: this.state.newUserName,
                                          name: this.state.newName
                                     })
             })
             

      }



      render(){
            return(<div className="row">
                          
                              <div className="col-2"></div>
                              <div className="col-8">
                              <div className="card border-info">
                                     <div className="card-header bg-info">Header</div>
                                     <div className="card-body">
                                     <div className="row">
                                           <div className="col">
                                                 <div className="form-group row">
                                                       <label className="col-form-label col-sm-4"  htmlFor="name">Name</label>
                                                      <div className="col-sm-8">
                                                             <input type='text' id='name' className="form-control" name='name' value={this.props.memberChoosen.name} ></input>
                                                      </div>
                                                </div> 

                                                <div className="form-group row">
                                                      <label className="control-label col-sm-4"  htmlFor="userName">User Name</label>
                                                      <div className="col-sm-8">
                                                             <input type='text'  className="form-control" id='userName' name='userName' value={this.props.memberChoosen.username} ></input>
                                                      </div>
                                                </div>

                                                <div className="form-group row">
                                                      <label className="control-label col-sm-4"  htmlFor="email">Email</label>
                                                      <div className="col-sm-8">
                                                             <input type='email'  className="form-control" id='email' name='email' value={this.props.memberChoosen.email}></input>
                                                       </div>
                                                 </div>  
                                                 <button className="btn btn-primary" onClick={()=>this.props.onRouteChange('home')}>BacktoHome</button>
                                                 


                                           </div>
                                           <div className="col">
                                           <div className="form-group row">
                                                       <label className="col-form-label col-sm-4"  htmlFor="newName">New Name</label>
                                                      <div className="col-sm-8">
                                                             <input type='text' id='newName' className="form-control" name='newName' onChange={this.onChangenewName} ></input>
                                                      </div>
                                          </div>   
                                           
                                           <div className="form-group row">
                                                      <label className="control-label col-sm-4"  htmlFor="newUserName"> New UserName</label>
                                                      <div className="col-sm-8">
                                                             <input type='text'  className="form-control" id='newUserName' name='newUserName' onChange={this.onChangenewUserName} ></input>
                                                      </div>
                                           </div>

                                           <div className="form-group row">
                                                      <label className="control-label col-sm-4"  htmlFor="newEmail"> New Email</label>
                                                      <div className="col-sm-8">
                                                             <input type='email'  className="form-control" id='newEmail' name='newEmail' onChange={this.onChangenewEmail}></input>
                                                       </div>
                                          </div>   
                                          <button className="btn btn-primary" onClick={()=>this.onSubmitUpdate()}>Submit</button> 
                                    </div>
                                     </div>
                                    </div>
                                    </div>
                                    </div>
                              <div className="col-2"></div>
                             
                  </div>)
      }
  
}

export default UpdateRobot;
