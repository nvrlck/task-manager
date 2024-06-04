import React, { useContext } from 'react'
import classes from './SideBar.module.scss'
import { useSelector } from 'react-redux'
import { ReactComponent as HeaderIcon } from './icons/header-icon.svg'
import { ReactComponent as ArchiveIcon } from './icons/archive-icon.svg'
import { ReactComponent as CalendarIcon } from './icons/calendar-icon.svg'
import { ReactComponent as TodayIcon } from './icons/today-icon.svg'
import SideBarItem from '../SideBarItem/SideBarItem'
import { VisibleContext } from '../../context/context'
import { Link } from 'react-router-dom'


const SideBar = () => {
  const {visible, setVisible} = useContext(VisibleContext)

  const tasks = useSelector(state => state.tasks.tasks)
  const categories = [...new Set(tasks.map(item => item.completed === false && item.category))].filter(Boolean)
  const header = true
  const sidebarClasses = [classes.sidebar]
  const toggleClasses = [classes.arrow]

  if (visible) {
    sidebarClasses.push(classes.opened)
    toggleClasses.push(classes.opened)
  }

  return (
    
    <div className={sidebarClasses.join(' ')}>
        <SideBarItem header={header} visible={visible} Icon={HeaderIcon} text={'Reminder'} href={'/'}/>
        <div className={classes.line}></div>
        <div className={classes.contents}>
          <SideBarItem visible={visible} Icon={TodayIcon} text={'Сегодня'} href={'/today'}/>
          <SideBarItem visible={visible} Icon={CalendarIcon} text={'Список дел'} href={'/'}/>
          <SideBarItem visible={visible} Icon={ArchiveIcon} text={'Выполненные'} href={'/completed'}/>
        </div>
        <div className={classes.line + ' ' + classes.line_bottom}></div>
        <div className={classes.toggle} onClick={() => setVisible(!visible)}>
          <svg className={toggleClasses.join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg>
        </div>
        {visible && <h2 className={classes.categories_header}>Категории</h2>}
        {visible 
        &&
        <ul className={classes.categories}>
          
            {categories.map(category => 
                <Link className={classes.categories_item_wrapper} key={category} to={`/${category}`} state={{category: category}}>
                  <li className={classes.categories_item}>{category}</li>
                </Link>
            )}
          
        </ul>
        }
        
    </div>
  )
}

export default SideBar