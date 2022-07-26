import { observer } from "mobx-react-lite";
import todo from "../store/todo";
import { Button} from 'antd';

const Todo = observer(() => {
  return (
    <div>
      <Button type="primary" className="btn" id="fetchTodoBtn" onClick={() => todo.fetchTodos()}>fetch todo</Button>
      {todo.todos.map((t) => (
        <div className="todo" key={t.id}>
          <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)} />
          {t.title}
          <Button type="primary" className="btn" id="xBtn" onClick={() => todo.removeTodo(t.id)}>X</Button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
