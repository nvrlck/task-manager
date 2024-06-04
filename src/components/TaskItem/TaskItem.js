import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, completeTask } from '../../store/taskSlice'
import classes from './TaskItem.module.scss'
import { ActiveContext, IdContext } from '../../context/context'

const TaskItem = ({title, id, date, description, removeIcons}) => {
    const dispatch = useDispatch()
    const {setActive} = useContext(ActiveContext)
    const {setId} = useContext(IdContext)

    const sendId = () => {
        setActive(true)
        setId(id)  
    }

    return (
        <li className={classes.list_item}>
            <div className={classes.wrapper}>
                <span className={classes.title}>{title}</span>
                <div>
                    {
                        removeIcons ? <span className={classes.icon + ' ' + classes.icon_remove} onClick={() => dispatch(completeTask({id}))}>&#8634;</span>   : 
                        <span>
                            <span className={classes.icon + ' ' + classes.icon_complete} onClick={() => dispatch(completeTask({id}))}>&#10004;</span>  
                            <span className={classes.icon + ' ' + classes.icon_edit} onClick={sendId}>&#9998;</span> 
                        </span>
                    } 
                    <span className={classes.icon + ' ' + classes.icon_delete} onClick={() => dispatch(removeTask({id}))}>&#10006;</span>
                </div>
            </div>
            <div className={classes.description}>{description}</div>
            <div className={classes.date}>{date}</div>
        </li>
    )
}

export default TaskItem