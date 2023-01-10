import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,Link
} from "react-router-dom";
import  router  from './router/router-config';
import RenderRouter from './router/index';
import {connect} from 'react-redux'
function App(props: { todos: any; }) {
  const name = 'helloworld';
  
  const {todos} = props
  return (
    <div className="App">
      {
        todos.map((item: { id: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; },index: any )=>{
          <div >{item.id}</div>
        })
      }
      <div>
        <Router>
          <div>
          <Link to="/home">home</Link>
          <Link to="/greeting">greeting</Link>
          </div>
          <RenderRouter routes={router}/>
        </Router>
      </div>
    </div>
  );
}
const mapStateProps = (state: { todos: any; },props: any) =>({
  todos:state.todos,
})

export default connect(mapStateProps)(App) ;
