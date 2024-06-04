import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push({
                id: new Date().toISOString(),
                date: action.payload.date,
                category: action.payload.category,
                title: action.payload.title,
                description: action.payload.description,
                completed: false
            })
        },
        editTask(state, action) {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? {
                ...task, 
                date: action.payload.date, 
                category: action.payload.category, 
                title: action.payload.title, 
                description: action.payload.description
            } : task)
        },
        removeTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },
        completeTask(state, action) {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? {...task, completed: !task.completed} : task)
        }
    }
})

export const {addTask, removeTask, completeTask, editTask} = taskSlice.actions;

export default taskSlice.reducer;