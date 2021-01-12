import React, { Component } from 'react'

function searchingFor(search){
    return function(x){
        return x.name.toLowerCase().includes(search.toLowerCase()) || ! search;
    }

}


export class Fetching extends React.Component {
    constructor(){
        super();
        this.state={
            item:[],
            isLoaded:false,
            search:''
        }
    }
    updatesearch(event){
        this.setState({
            search: event.target.value 
        });
    }

    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                item:json
            })
        })
    }
    render() {
        var {isLoaded,item}=this.state;
        if(!isLoaded){
            return <div>Loading....</div>
        }
        else{
        return (
            <div>
                <div className="search">
                 <form>
                <label>
                    <input 
                    type="text"
                    name="name" 
                    value={this.state.search}
                    onChange={this.updatesearch.bind(this)} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                </div>
                <div className="row">
                {item.filter(searchingFor(this.state.search)).map(item=>(
                    
                    <div className="col-lg-3 col-md-6">
                    <div className="single-feature">
                    <div href="#" className="title">
                        <img className="img-div" src={item.flag}></img>
                        <h3 className="sname">{item.name}</h3>
                        <p className="sdec">{item.capital}</p>  
                      </div>
                    </div>
                </div> 

                ))}
                </div>
            </div>   
	      )
        }
    }
}

export default Fetching
