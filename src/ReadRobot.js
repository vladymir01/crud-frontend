import React from 'react';

const ReadRobot = (props) => {
  return(
           <div className="row">
                  <div className="col-4"></div>
            <div className="col-4">
                  <div className="card border-info">
                  <div className="card-header bg-info">Header</div>
                  <div className="card-body">
                        <form className="form-horizontal">
                               <p>This is the component ReadRobot</p>
                    
                       
                              <div className="form-group row">
                                    <label className="col-form-label col-sm-4"  htmlFor="name">Name</label>
                                    <div className="col-sm-8">
                                          <input type='text' id='name' className="form-control" name='name' value={props.memberChoosen.name} ></input>
                                    </div>
                              </div>

                                <div className="form-group row">
                                      <label className="control-label col-sm-4"  htmlFor="userName">User Name</label>
                                      <div className="col-sm-8">
                                          <input type='text'  className="form-control" id='userName' name='userName' value={props.memberChoosen.username} ></input>
                                      </div>
                                </div>

                                <div className="form-group row">
                                      <label className="control-label col-sm-4"  htmlFor="email">Email</label>
                                      <div className="col-sm-8">
                                          <input type='email'  className="form-control" id='email' name='email' value={props.memberChoosen.email}></input>
                                      </div>
                                </div>                 
                                 <div className="form-group row">
                                                                                                
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

export default ReadRobot;
