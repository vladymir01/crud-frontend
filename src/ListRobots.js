import React, { Component } from 'react';

class ListRobots extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }

  onClickRead=(e)=>{
    this.props.onRouteChange('read');
    this.props.setMemberChoosen(e)

  }

  onClickUpdate=(e)=>{
    this.props.onRouteChange('update');
    this.props.setMemberChoosen(e)

  }
  

  render(){
      return(<div className="card border-info">
                              
                   <div className="card-header bg-info"> List of Robots</div>
                   <div className="card-body"> 
                          
                              <table className="table table-sm table-striped table-hover table-light table-bordered" style={{textAlign:"center"}} >
                                        <thead className="">
                                              <tr>
                                                <th scope="col">Member ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">User Name</th>
                                                <th scope="col">Email</th>
                                                
                                              </tr>
                                        </thead>
                                        <tbody>
                                                {this.props.members.map(member=>{
                                                  return ( <tr>
                                                              <td>{member.member_id}</td>
                                                              <td>{member.name}</td>
                                                              <td>{member.username}</td>
                                                              <td>{member.email}</td>
                                                              <td><button className="btn btn-danger" onClick={()=>this.props.deleteMember(member.member_id)}>Delete</button></td>
                                                              <td><button className="btn btn-primary" onClick={()=>this.onClickRead(member)}> Read </button></td>
                                                              <td><button className="btn btn-success" onClick={()=>this.onClickUpdate(member)}> Update </button></td>
                                                          </tr>)
                                                })}
                                        </tbody>                          
                                                                  
                                      
                              </table>
                         
                     </div>
                   
                         
                          
                     
          </div>) 
  }
  
    
}

export default ListRobots;
