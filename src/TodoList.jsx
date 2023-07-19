import { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';

const initialTodos = [
    { id: 1, text: 'Complete project proposal', completed: false },
    { id: 2, text: 'Buy groceries', completed: false },
    { id: 3, text: 'Call mom', completed: false },
    { id: 4, text: 'Pay bills', completed: false },
    { id: 5, text: 'Read book chapter 3', completed: true },
    { id: 6, text: 'Go for a run', completed: false },
    { id: 7, text: 'Schedule dentist appointment', completed: false },
    { id: 8, text: 'Prepare for presentation', completed: false },
    { id: 9, text: 'Clean the house', completed: false },
    { id: 10, text: 'Write blog post', completed: false },
    { id: 11, text: 'Attend yoga class', completed: false },
    { id: 12, text: 'Finish coding assignment', completed: false },
    { id: 13, text: 'Organize closet', completed: false },
    { id: 14, text: 'Schedule team meeting', completed: false },
    { id: 15, text: 'Research vacation destinations', completed: false }
]

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  const removeTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(t => t.id !== id)
    })
  };
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map(todo => {
        return <TodoItem 
                todo={todo} 
                key={todo.id} 
                removeTodo={() => removeTodo(todo.id)}/>;    
      })};
    </List>
  );
}
