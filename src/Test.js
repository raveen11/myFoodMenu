import React, { Component } from 'react';
import ArrayList from './ArrayList';

class Test extends Component {
        constructor(){
            super();
            this.state={
                users:[
                    {id:'1',name:'rabin'},
                    {id:'2',name:'nabin'},
                    {id:'3',name:'Anu'},
                ]
            }
        }
     moveItem=(id,e)=>{
         const users=Object.assign([],this.state.users);
         const index=this.state.users.findIndex(id)
            for(var i=0;i<users.length;i++){
                if(users[i]==users[index]){
                    users[0]=users[index]
                }
            }
         this.setState({users:users})
     }   

    render() {
        return (
            <div>
                {this.state.users.map((item,index)=>{
                    return(<ArrayList key={item.id} clickitem={this.moveItem.bind(this,item.id)}>{item.name}</ArrayList>)
                })}
                
            </div>
        );
    }
}

export default Test;