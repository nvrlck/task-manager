import React, { useContext } from 'react'
import classes from './MyModal.module.scss'
import { ActiveContext } from '../../context/context'

const MyModal = ({ children }) => {
    const rootClasses = [classes.modal]

    const {active, setActive} = useContext(ActiveContext)

    if (active) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setActive(false)}>
            <div className={classes.modal_content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal