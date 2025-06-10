import React, { useState } from "react";
class Dispatcher {
     callbacks :any[] = []
  constructor() {
    this.callbacks = [];
  }
  register(callback :any) {
    this.callbacks.push(callback);
  }
  dispatch(action :  any) {
    this.callbacks.forEach(cb => cb(action));
  }
}

function TodoApp() {
    // Action
const addTodoAction = (text : any) => ({
  type: "ADD_TODO",
  payload: text,
});

// Dispatcher (simplified)

const dispatcher = new Dispatcher();
// Store
let todos :any[] = [];
const todoStore : any = {
  getTodos: () => todos,
  onChange: null,
};


dispatcher.register((action : any) => {
  if (action.type === "ADD_TODO") {
    todos.push(action.payload);
    if (todoStore.onChange) todoStore.onChange();
  }
});
  const [items, setItems] = useState(todoStore.getTodos());

  React.useEffect(() => {
    todoStore.onChange = () => setItems([...todoStore.getTodos()]);
  }, []);

  const addTodo = () => {
    const text = prompt("Enter todo:");
    dispatcher.dispatch(addTodoAction(text));
  };

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {items.map((todo : any, i : any) => <li key={i}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default TodoApp;