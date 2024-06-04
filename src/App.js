import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Completed from "./components/pages/Completed";
import TodoList from "./components/pages/TodoList";
import Today from "./components/pages/Today";
import SideBar from './components/SideBar/SideBar';
import { ActiveContext, IdContext, VisibleContext } from './context/context';
import CategoryTodoList from './components/pages/CategoryTodoList';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)
  const [id, setId] = useState('')

  return (
    <ActiveContext.Provider value={{
      active,
      setActive
    }}>
    <IdContext.Provider value={{
      id,
      setId
    }}>
    <VisibleContext.Provider value={{
      visible,
      setVisible
    }}>
      <BrowserRouter>
       <SideBar />
        <Routes>
          <Route path='/' element={<TodoList/>} />
          <Route path='/:title' element={<CategoryTodoList/>} />
          <Route path='/today' element={<Today/>} />
          <Route path='/completed' element={<Completed/>} />
          <Route path="*" element={<Navigate to ='/'/>}/>
        </Routes>
      </BrowserRouter>
    </VisibleContext.Provider>
    </IdContext.Provider>
    </ActiveContext.Provider>
  )
}

export default App;