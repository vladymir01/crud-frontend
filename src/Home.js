import React, { Component } from 'react';
import ListRobots from './ListRobots.js';
import SearchMembers from './SearchMembers.js'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      members:[],
      searchField:""
    }
  }

  componentDidMount() {
    this.displayList();
  }

  
  displayList(){
    fetch('http://localhost:3003/select')
    .then(response=> response.json())
    .then(users => {this.setState({ members: users})});
  }

  deleteMember=(id)=>{    

    fetch('http://localhost:3003/delete/'+ id);
   // this.props.onRouteChange('home');
    window.location.reload();
    //this.displayList();
    //console.log(this.state.members);

  }

  OnSearchFieldChange=(e)=> {
      this.setState({searchField:e.target.value})
      
  }

 
  render(){
            const filteredMembers = this.state.members.filter(member =>{
             return member.name.toLowerCase().includes(this.state.searchField.toLowerCase());
             })

         return(<div className="row">
                      <div className="col-3">
                           
                      </div>
                      <div className="col-6">
                            <p>This is the component Home</p>
                            <button className="btn btn-primary" onClick={()=>this.props.onRouteChange('create')}>Create</button>
                            <SearchMembers onSearch={this.OnSearchFieldChange} />
                            <ListRobots setMemberChoosen={this.props.setMemberChoosen} onRouteChange={this.props.onRouteChange} 
                                members={filteredMembers} deleteMember={this.deleteMember}/>
                      </div>
                      
                      
                      
              </div>) 
  }
 
    
}

export default Home;
