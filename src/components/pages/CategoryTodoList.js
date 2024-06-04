import React from 'react'
import '../../App.scss'
import { useLocation } from 'react-router-dom'
import MainTitle from '../MainTitle/MainTitle'
import InputForm from '../InputForm/InputForm'
import TaskList from '../TaskList/TaskList'
import MyModal from '../MyModal/MyModal'

const CategoryTodoList = () => {
    const location = useLocation()
    const category = location.state.category

    return (
        <div className='App'>
            <MainTitle title={category}/>
            <InputForm chosenCategory={category}/>
            <TaskList completed={false} chosenCategory={category}/>
            <MyModal> 
                <InputForm chosenCategory={category}/>
            </MyModal>
        </div>
    )
}

export default CategoryTodoList