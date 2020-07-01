import React from 'react';
import {robots} from './robots.js';

function RobotsList(){
    return(
        <div>
             {
                robots.map((robot, i) => {
                    return ( 
                              <div> 
                                  {robots[i].id}
                                   {robots[i].name}
                                   {robots[i].username}
                                   {robots[i].email}
                                   <button>Read</button>
                                   <button>Edit</button>
                                   <button>Delete</button>
                               </div>
                  
                           );
                        }) 
             }              
             
      
        </div>
    )
}

export default RobotsList;