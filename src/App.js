import Header from './components/Header';
import TodosLogic from './components/TodosLogic';

function App() {
  return (
    <div className="todo-app">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}

export default App;
