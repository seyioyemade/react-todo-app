import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: PropTypes.isRequired,
  handleChange: PropTypes.isRequired,
  delTodo: PropTypes.isRequired,
  setUpdate: PropTypes.isRequired,
};

export default TodosList;
