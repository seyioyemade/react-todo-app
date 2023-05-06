import { useState } from 'react';
import styles from "../styles/TodoItem.module.css";

const TodoItem = ({ todo, handleChange, delTodo, setUpdate }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(todo.id)}>Delete</button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input
      type="text"
      onChange={(e) => setUpdate(e.target.value, todo.id)}
      onKeyDown={handleUpdatedDone}
      value={todo.title}
      className={styles.textInput}
      style={editMode}
    />
    </li>
  );
};
export default TodoItem;
