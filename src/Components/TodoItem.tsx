const TodoItem = ({ todo, toggleComplete, deleteTodo }: any) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #eee', marginBottom: '10px' }}>
      <span 
        onClick={() => toggleComplete(todo.id)} 
        style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none', color: todo.isCompleted ? '#888' : '#333', cursor: 'pointer', flex: 1 }}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => deleteTodo(todo.id)} 
        style={{ marginLeft: '10px', color: '#ff4d4f', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Sil
      </button>
    </div>
  );
};

export default TodoItem;
