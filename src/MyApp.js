import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import RobotsList from './RobotsList.js';
import CreateRobot from './CreateRobot.js';
import ReadRobot from './ReadRobot.js';
import UpdateRobot from './UpdateRobot.js';
import Home from './Home.js';


class MyApp extends Component{
    constructor(){
        super();
        this.state = {
            route:'',
            memberChoosen:{}         

        }
    }

    setMemberChoosen=(mbchoosen)=>{
        this.setState({memberChoosen:mbchoosen});
        //console.log(this.state.memberChoosen);
    }

    onRouteChange=(newroute)=>{
        this.setState({route:newroute});
    }

    render()   
    {
       // const objTest = {name:'Alain Francois', username:'alain',  email:'alain@gmail.com'}
        return(<div>{                                                
                        this.state.route ==='read'? <ReadRobot memberChoosen={this.state.memberChoosen} onRouteChange={this.onRouteChange}/>: 
                        this.state.route === 'create'? <CreateRobot onRouteChange={this.onRouteChange}/>: 
                        this.state.route ==='update'? <UpdateRobot memberChoosen={this.state.memberChoosen} onRouteChange={this.onRouteChange}/>:
                        <Home onRouteChange={this.onRouteChange} setMemberChoosen={this.setMemberChoosen} />
                    }
                    
            </div>) 
    }  
    
}

export default MyApp;
