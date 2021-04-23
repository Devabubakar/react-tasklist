import React, { Component } from 'react';
import './index.css';
import TaskList from './components/Task-list.component/TaskList';
import Form from './components/Form-input.component/ Form';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      item: '',
    };
  }

  onDelete = async (task) => {
    console.log(task);
  };
  

  componentDidMount() {}
  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const addedTasks = [...this.state.tasks, this.state.item];
    if (this.state.item.length > 0) {
      this.setState({
        tasks: addedTasks,
      });
    }

    this.setState({
      item: '',
    });
  };

  render() {
    return (
      <div className='container '>
        <div className='add-form'>
          <form action='' onSubmit={this.handleSubmit}>
            <Form
              type='text'
              handleChange={this.handleChange}
              value={this.state.item}
              name='addItem'
            />
          </form>
        </div>
        <TaskList tasks={this.state.tasks} onDelete={this.onDelete} />
      </div>
    );
  }
}
