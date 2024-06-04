import React from 'react'
import TaskList from '../TaskList/TaskList'
import '../../App.scss'
import InputForm from '../InputForm/InputForm';
import MainTitle from '../MainTitle/MainTitle';
import MyModal from '../MyModal/MyModal';

const Today = () => {
  let today = ('0' + new Date().getDate()).slice(-2) + '.' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '.' + new Date().getFullYear();

  return (
    <div className='App'>
      <MainTitle title={'Сегодня'} today={today}/>
      <InputForm blockDate={true}/>
      <TaskList completed={false} today={today}/>
      <MyModal> 
        <InputForm/>
      </MyModal>
    </div>
  )
}

export default Today