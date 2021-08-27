import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import HomeComponent from '../component/home';
import Greeting from '../component/greeting/greeting1'


export default function RenderRouter(props:any) {
    const { routes } = props;
    return (
        
        <Switch>
            <Route path="/" exact render={() => <Redirect to="/home" />} />
            <Route path="/home" render={()=><HomeComponent  />}/>
            <Route path="/greeting" render={()=><Greeting  />}/>
            {   
            
                routes.map((item:any, index:any) => {
                    <Route 
                        key={ index} 
                        path={item.path} 
                      
                        render={
                            (props)=>
                            <item.component {...props}  />
                            }>

                    </Route>
                })
            }
        </Switch>
       
    )
}