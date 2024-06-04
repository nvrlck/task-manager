import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { useSelector } from 'react-redux'
import classes from './TaskList.module.scss'

const TaskList = ({completed, removeIcons, today, chosenCategory}) => {
    const tasks = useSelector(state => state.tasks.tasks)
    let categories = [];

    if (chosenCategory) {
        categories.push(chosenCategory)
    } else {
        categories = [...new Set(tasks.map(item => today !== undefined 
        ? 
        item.completed === completed && item.date === today && item.category 
        : 
        item.completed === completed && item.category))]
    }

    return (
        <div className={completed ? classes.wrapper_long : classes.wrapper}>
            {
                categories.map(category =>
                    <ul key={category} className={classes.tasks_list}> {category}
                        {
                            tasks.map(task =>
                                today !== undefined 
                                ? 
                                task.category === category && task.completed === completed && task.date === today 
                                ? 
                                <TaskItem removeIcons={removeIcons} key={task.id} {...task}/> 
                                :
                                null  
                                : 
                                task.category === category && task.completed === completed 
                                ? 
                                <TaskItem removeIcons={removeIcons} key={task.id} {...task}/> 
                                : 
                                null
                            )
                        }
                    </ul>
                )
            }
        </div>  
    )
}

export default TaskList