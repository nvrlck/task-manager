import React, { useContext, useEffect } from 'react'
import classes from './InputForm.module.scss'
import MyCalendar from '../Calendar/MyCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../../store/taskSlice';
import { useState } from 'react';
import { ActiveContext, IdContext } from '../../context/context';

const InputForm = ({ blockDate, chosenCategory }) => {
  const {id, setId} = useContext(IdContext);
  const {active, setActive} = useContext(ActiveContext);
  const task = useSelector(state => state.tasks.tasks).filter(item => item.id === id);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  let date = useSelector(state => state.date.date)


  useEffect(() => {
    if (id) {
      setTitle(task[0].title)
      setCategory(task[0].category)
      setDescription(task[0].description)
    }
    if (!active) {
      setTitle('')
      if (!chosenCategory) {
        setCategory('')
      }
      setDescription('')
    }
    // eslint-disable-next-line
  },[id, active])

  useEffect(() => {
    if (chosenCategory) {
      setCategory(chosenCategory)
    }
  },[chosenCategory])
  
  const addNewTask = (e) => {
    e.preventDefault();
    if (title.trim().length > 0 && category.trim().length > 0) {
     dispatch(addTask({title, category, date, description}))
    }
    setTitle('')
    setDescription('')
    if (!chosenCategory) {
      setCategory('')
    }
  }

  const changeTask = (e) => {
    e.preventDefault();
    if (title.trim().length > 0 && category.trim().length > 0) {
        dispatch(editTask({id, title, category, date, description}))
    }
    setActive(false)
    setId('')
    setTitle('')
    setDescription('')
    if (!chosenCategory) {
      setCategory('')
    }
  }

  const addCategory = (e) => {
    const str = e.target.value
    setCategory(str.length > 0 ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '')
  }

  return (
    <form>
      <div className={classes.wrapper}>
        {chosenCategory 
        ? 
        <input placeholder='Категория' readOnly className={classes.category} value={category} onChange={addCategory}/> 
        : 
        <input placeholder='Категория' className={classes.category} value={category} onChange={addCategory}/>
        }
        <input placeholder='Задача' className={classes.title} value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder='Описание' className={classes.description} value={description} onChange={(e) => setDescription(e.target.value)}/>
        <div className={classes.bottom_wrapper}>
          {blockDate ? <MyCalendar blockDate={blockDate}/> : active ? <MyCalendar chosenDate={task[0].date}/> : <MyCalendar/>}
          {/* {active ? <MyCalendar chosenDate={task[0].date}/> : <MyCalendar/>} */}
          
          {active 
          ? 
          <button className={classes.add_task} onClick={changeTask}>Обновить</button> 
          : 
          <button className={classes.add_task} onClick={addNewTask}>Добавить</button>
          }
        </div>
      </div>
    </form>
  )
}

export default InputForm;