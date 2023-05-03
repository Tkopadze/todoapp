import React, { useEffect, useState } from 'react';
import './TaskPage.css';
import SubmitForm from '../../components/SubmitForm/SubmitForm';
import TasksList from '../../components/TasksList/TasksList';
import NavBar from '../../components/navigation/nav';

const TaskPage =(props)=> {
  
  const [name, setNamte] = useState(()=> localStorage.getItem('name') || "");
  const [photo, setPhoto] = useState(()=> localStorage.getItem('photo') || "" );
  const [storedTasks, setStoredTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [tasks, setTasks] = useState()



  function addTask(task){
    console.log(task)
    let tempTasks = tasks;
    tempTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tempTasks));
    setTasks([...tempTasks]);
    
    // this.setState((prevState) => {
    //  
    //   localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    //   return { tasks: updatedTasks };
    // });
  }

  function removeTask(id){
      const _tasks = tasks.filter(element => (element.id !== id));
      localStorage.setItem('tasks', JSON.stringify(_tasks));
     setTasks(_tasks)
  }

 
useEffect(() => {
  const _tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const photo =JSON.parse(localStorage.getItem('photo'));
  console.log(photo);
  setPhoto(photo);
  setTasks(_tasks);


}, [])

  // componentDidMount() {
  //  
  //   this.setState({ tasks });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.name !== this.state.name || prevState.photo !== this.state.photo) {
  //     const profile = { name: this.state.name, photo: this.state.photo };
  //     localStorage.setItem('profile', JSON.stringify(profile));
  //   }
  // }
  


    return (
      <div className="taskWrap">
         <NavBar name={name} photo={photo} />
         
         <SubmitForm addTask={addTask} />
        <TasksList tasks={tasks || null} removeTask={removeTask} />
         
       
      </div>
    );
  
}

export default TaskPage;
