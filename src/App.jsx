import React, {useState} from "react";
import './App.css';
import Button from "./components/Button";
import Todo from "./components/Todo";
import Todolist from "./components/Todolist";

const App = () => {
  const [todos, setTodos] = useState([
    { 
      id: 0, 
      title: '리액트 공부하기', 
      contents: '리액트 기초를 공부해봅시다.', 
      isDone: false,
    },
    { 
      id: 1, 
      title: '드디어', 
      contents: '성공했다ㅜ.ㅜ', 
      isDone: true,
    },
  ])

  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')


  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const contentsChangeHandler = (event) => {
    setContents(event.target.value)
  }

  const addButtonHendler = ()=> {
    const newTodo = {
      id: todos.length + 1,
      title,
      contents,
    }
    setTodos([...todos, newTodo])
    setTitle('')
    setContents('')
  }

  const clickRemoveButtonHandler = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const clickActionButtonHandler = (id) => {
    const newTodos = todos.map(todo => todo.id === id? 
      {...todo, isDone : !todo.isDone} : todo)
      setTodos(newTodos)
  }

  const workingTodos = todos.filter(item => !item.isDone)
  const doneTodos = todos.filter(item => item.isDone)

  return (
    <div className='layout-style'>
      <div className='container-style'>
        <div>My Todo List</div> 
        <div>React</div>
        </div>
      <div className='write-style'>
          <Todolist 
          title={title}
          titleChangeHandler={titleChangeHandler}
          contents={contents}
          contentsChangeHandler={contentsChangeHandler}/>
        <Button addButtonHendler={addButtonHendler}/>
      </div>
      <div className='todolistentire-style'>
      <div className='font-style'>Working.. 🌱</div>
      <div className='todolistline-style'>
          {workingTodos.map(function(item) {
            return (
            <Todo 
            key={item.id}
            item={item}
            clickRemoveButtonHandler={clickRemoveButtonHandler}
            clickActionButtonHandler={clickActionButtonHandler}
            />
            )
            })}
      </div>
      <div className='font-style'>Done..! 🌳</div>
      <div className='todolistline-style'>
          {doneTodos.map((item) => (
            <Todo 
            key={item.id}
            item={item} 
            clickRemoveButtonHandler={clickRemoveButtonHandler}
            clickActionButtonHandler={clickActionButtonHandler}
            />
            ))}
      </div>
      </div>
    </div>
  );
}

export default App;
