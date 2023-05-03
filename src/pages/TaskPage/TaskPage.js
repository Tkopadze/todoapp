import React from 'react';
import './TaskPage.css';
import SubmitForm from '../../components/SubmitForm/SubmitForm';
import TasksList from '../../components/TasksList/TasksList';
import NavBar from '../../components/navigation/nav';

class TaskPage extends React.Component{
  
  constructor(props){
    super(props);
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const storedProfile = JSON.parse(localStorage.getItem('profile')) || {};
    this.state = {
      tasks: storedTasks,
      name: localStorage.getItem('name') || "",
      photo: localStorage.getItem('photo') || ""
    };

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task){
    this.setState((prevState) => {
      const updatedTasks = [...prevState.tasks, task];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    });
  }

  removeTask(id){
      const tasks = this.state.tasks.filter(element => (element.id !== id));
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.setState({ tasks: tasks });
  }

 
  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.setState({ tasks });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.name !== this.state.name || prevState.photo !== this.state.photo) {
  //     const profile = { name: this.state.name, photo: this.state.photo };
  //     localStorage.setItem('profile', JSON.stringify(profile));
  //   }
  // }

  render() {
    const { name, photo } = this.state;
    return (
      <div className="taskWrap">
         <NavBar name={this.props.name} photo={this.props.photo} />
         
         <SubmitForm addTask={this.addTask} />
        <TasksList tasks={this.state.tasks || null} removeTask={this.removeTask} />
         
       
      </div>
    );
  }
}

export default TaskPage;
