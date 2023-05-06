import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  todo, handleChange, delTodo, setUpdate,
}) => {
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
        <button type="button" onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => delTodo(todo.id)}>Delete</button>
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

TodoItem.propTypes = {
  todo: PropTypes.isRequired,
  handleChange: PropTypes.isRequired,
  delTodo: PropTypes.isRequired,
  setUpdate: PropTypes.isRequired,
};

export default TodoItem;
