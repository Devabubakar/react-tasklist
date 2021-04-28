import React, { Component } from 'react'
import './App.css'
import  Tasklist from './components/Task-list.component/TaskList'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Tasklist />
        
      </div>
    )
  }
}
