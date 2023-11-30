import { useState } from 'react';
import { Container, NewTask, Task } from './components/styles/style';

function App() {
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);

  const addTask = () => {
    if (!task) return alert('Digite uma Tarefa!');
    const newTask = {
      id: Math.floor(Math.random() * 100),
      task: task,
      completed: false,
    };
    setListTask([...listTask, newTask]);
    console.log(newTask);
    setTask('');
  };

  const completedTask = (id, completed) => {
    const newList = [...listTask];
    newList.map((todo) =>
      todo.id === id ? (todo.completed = !todo.completed) : todo,
    );
    setListTask(newList);
  };

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  return (
    <Container>
      TODO List
      <NewTask>
        <input
          value={task}
          type="text"
          name="newTask"
          id="newTask"
          placeholder="Digite aqui sua Tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" onClick={addTask}>
          Adicionar
        </button>
      </NewTask>
      <Task>
        {listTask.map((task) => (
          <li
            style={{ textDecoration: task.completed ? 'line-through' : '' }}
            key={task.id}
          >
            <p>{task.task}</p>
            <div>
              <button
                className="btnCompleted"
                onClick={() => completedTask(task.id, task.completed)}
              >
                <i className="bx bx-check "></i>
              </button>
              <button onClick={() => removeTask(task.id)}>
                <i className="bx bx-trash "></i>
              </button>
            </div>
          </li>
        ))}
      </Task>
    </Container>
  );
}
export default App;
