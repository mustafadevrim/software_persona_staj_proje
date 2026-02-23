import { useState } from 'react';
import TodoItem from '../Components/TodoItem';

const HomePage = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Kitap Oku', isCompleted: true },
    { id: 2, text: 'Silo İzle', isCompleted: false },
  ]);
  const [input, setInput] = useState('');

  const addTodo = (e: any) => {
    e.preventDefault();
    if (!input) return;
    setTodos([...todos, { id: Date.now(), text: input, isCompleted: false }]);
    setInput('');
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'sans-serif',
        backgroundColor: '#f0f2f5',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          height: 'fit-content',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: '#1a1a1a',
            marginBottom: '20px',
          }}
        >
          Todo List
        </h1>
        <form
          onSubmit={addTodo}
          style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Yeni görev..."
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ddd',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Ekle
          </button>
        </form>
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
