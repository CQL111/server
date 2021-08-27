import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,Link
} from "react-router-dom";
import  router  from './router/router-config';
import RenderRouter from './router/index'
function App() {
  const name = 'helloworld'
  return (
    <div className="App">
        
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

export default App;
