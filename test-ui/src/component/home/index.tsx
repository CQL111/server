import * as React from 'react';
import { Component } from 'react';


class HomeComponent extends React.Component {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props:any){
        super(props)
        
    }
    countInterval:any
    state = { count: 1 }
    componentDidMount(){
        this.countInterval = setInterval(()=>{
            this.addCount()
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.countInterval)
    }
    addCount(){
    
        this.setState((state)=>({
            count: 2,
        }))
    }
    render() { 
        return (<div> <h1>{2}</h1><h2>{}</h2></div> );
    }
}
 
export default HomeComponent;