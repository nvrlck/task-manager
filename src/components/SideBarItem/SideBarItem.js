import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SideBarItem.module.scss'

const SideBarItem = ({header, Icon, visible, text, href}) => {
  return (
    <Link to={href} className={header ? classes.header : classes.contents_item}>
        {/* <Icon className={classIcon}/> */}
        {visible 
        ? 
        <div className={classes.contents_wrapper}>
          <Icon className={header ? classes.header_icon : classes.contents_icon}/> 
          <h2 className={header ? classes.header_title : classes.contents_title}>{text}</h2>
        </div> 
        : 
        <Icon className={header ? classes.header_icon : classes.contents_icon}/> 
        }
    </Link>
  )
}

export default SideBarItem