import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// 初始化数据state
const initialState = {
  todos:[
    {
      id:1,
      text:'hello',
      completed:false
    },
    {
      id:2,
      text:'Hi',
      completed:false
    }
  ]
}
// 数据关联关系
const rootReducer = ( state: any, action: any)=>{
  return state
}
// 创建可以追踪的store
const store = createStore(rootReducer,initialState)

ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
