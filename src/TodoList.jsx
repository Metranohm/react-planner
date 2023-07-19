import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

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
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map(todo => {
          const labelId = `checkbox-list-label-${todo.id}`;

          return (
          <ListItem
          key={todo.id}
          secondaryAction={
            <IconButton 
              edge="end" 
              aria-label="comments">
              <CommentIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton 
          role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.text} />
          </ListItemButton>
        </ListItem>
          );
        })}
      </List>
    )
}
