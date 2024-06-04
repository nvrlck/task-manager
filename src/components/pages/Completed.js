import React from 'react'
import TaskList from '../TaskList/TaskList'
import '../../App.scss'
import MainTitle from '../MainTitle/MainTitle'

const Completed = () => {
  

  return (
    <div className="App">
      <MainTitle title={'Выполненные'}/>
      <TaskList completed={true} removeIcons={true}/>
    </div>
  )
}

export default Completed