import React from 'react'
import '../../App.scss';
import InputForm from '../InputForm/InputForm';
import TaskList from '../TaskList/TaskList';
import MainTitle from '../MainTitle/MainTitle';
import MyModal from '../MyModal/MyModal';


function App() {
  
  return (
    <div className="App">
      <MainTitle title={'Список дел'}/>
      <InputForm />
      <TaskList completed={false}/>
      <MyModal> 
        <InputForm/>
      </MyModal>
    </div>
  );
}

export default App;