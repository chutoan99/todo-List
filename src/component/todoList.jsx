
import { useState } from 'react';
import './todoList.css';
function TodoList() {
    const removeTodo = (item) => {
        const index = todoList.findIndex(x=>x.id === item.id);
        if (index < 0) return;
        const newTodoList = [...todoList];
        newTodoList.splice(index,1)
        setTodoList(newTodoList)
    }
    const handleOnchange = (e)=>{
        setValue(e.target.value)
    }
    const handleSubmit = (e) =>{  
        const formValue = {
            title: value
        }
        setValue('')
        const newtodo = {
            id: todoList.length + 1,
            ...formValue
        }
        const newTodoList = [...todoList]
        newTodoList.push(newtodo)
        setTodoList(newTodoList)

    }
    const list = [{ id: 1, title: 'I love Easy Frontend! 😍 ' },{ id: 2, title: 'We love Easy Frontend! 🥰 ' },{ id: 3, title: 'They love Easy Frontend! 🚀 ' },]
    const [value, setValue] = useState('')
    const [todoList, setTodoList] = useState(list)
    return (
        <div className="list">
            <div className="content">
                <input 
                    placeholder='text'
                    value={value}
                    onChange={handleOnchange}
                >
                </input>
                <button 
                    type="submit" 
                    className="btn btn-success"
                    onClick={handleSubmit}
                >
                  Success 
                </button>
            </div>
            <ul >
                {todoList.map(item => (
                    <li 
                    key={item.id}
                    onClick={()=> removeTodo(item)}
                    >
                    {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;
