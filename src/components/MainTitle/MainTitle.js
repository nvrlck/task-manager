import React, { useContext } from 'react'
import classes from './MainTitle.module.scss'
import { VisibleContext } from '../../context/context'

const MainTitle = ({ title, today }) => {
  const {visible} = useContext(VisibleContext)

  return (
    <div>
        <h1 className={visible ? classes.title : classes.title + ' ' + classes.title_left}>{title} <span>{today?.slice(0, -5)}</span></h1> 
    </div>
  )
}

export default MainTitle