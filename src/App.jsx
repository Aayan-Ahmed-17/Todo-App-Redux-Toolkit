import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from '../src/configs/redux/reducers/todoSlice';

function App() {
    const [text, setText] = useState('');
    const [editIndex, setEditIndex] = useState(-1);
    const dispatch = useDispatch();
    const todos = useSelector((state) => state);

    console.log(todos)

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!text.trim()) return;

    //     if (editIndex !== -1) {
    //         // Update existing todo
    //         dispatch(editTodo({ index: editIndex, newTitle: text }));
    //         setEditIndex(-1);
    //     } else {
    //         // Add new todo
    //         dispatch(addTodo({ title: text }));
    //     }
    //     setText('');
    // };

    // const handleEdit = (index) => {
    //     setText(todos[index].title);
    //     setEditIndex(index);
    // };

    // const handleCancel = () => {
    //     setText('');
    //     setEditIndex(-1);
    // };

    // return (
    //     <div>
    //         <h1>Todo List</h1>
    //         <form onSubmit={handleSubmit}>
    //             <input
    //                 type="text"
    //                 value={text}
    //                 onChange={(e) => setText(e.target.value)}
    //                 placeholder="Enter todo..."
    //             />
    //             <button type="submit">
    //                 {editIndex !== -1 ? 'Update Todo' : 'Add Todo'}
    //             </button>
    //             {editIndex !== -1 && (
    //                 <button type="button" onClick={handleCancel}>
    //                     Cancel
    //                 </button>
    //             )}
    //         </form>

    //         <ul>
    //             {todos.map((todo, index) => (
    //                 <li key={todo.id}>
    //                     {todo.title}
    //                     <button onClick={() => handleEdit(index)}>
    //                         Edit
    //                     </button>
    //                     <button onClick={() => dispatch(removeTodo({ index }))}>
    //                         Delete
    //                     </button>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
}

export default App;