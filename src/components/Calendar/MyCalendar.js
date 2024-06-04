import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import classes from './MyCalendar.module.scss'
import { useDispatch } from 'react-redux';
import { addDate } from '../../store/dateSlice';

const MyCalendar = ({ blockDate, chosenDate }) => {
  
  const [value, onChange] = useState(chosenDate ? new Date(chosenDate.slice(3, 5) + ' ' + chosenDate.slice(0, 2) + ' ' + chosenDate.slice(-4)) : new Date())
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  

  const date = ('0' + value.getDate()).slice(-2) + '.' + ('0' + (value.getMonth() + 1)).slice(-2) + '.' + value.getFullYear();
  const taskDate = chosenDate ? chosenDate.slice(3, 5) + ' ' + chosenDate.slice(0, 2) + ' ' + chosenDate.slice(-4) : ''

  useEffect(() => {
    dispatch(addDate({date}))
  },[date, dispatch])

  useEffect(() => {
    if (chosenDate) {
      onChange(new Date(taskDate))
    } else {
      onChange(new Date())
    }
  }, [chosenDate, taskDate])
  
  return (
    <div className={classes.zxc}>
      {blockDate ? <input className={classes.date + ' ' + classes.date_blocked} value={date} readOnly/> : <input className={classes.date} value={date} readOnly onClick={() => setActive(!active)} />}
      {active && <div className={classes.wrapper} onClick={() => setActive(false)} />}
      {
        active &&
        <Calendar className={classes.calendar} onChange={onChange} value={value}  locale='ru-RU'/> 
      }
      
    </div>
    
    
  )
}

export default MyCalendar