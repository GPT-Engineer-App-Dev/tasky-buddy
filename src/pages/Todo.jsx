import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ListTodo, Plus, Trash2 } from "lucide-react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <ListTodo className="mr-2" />
        Todo List
      </h1>
      <div className="flex mb-4">
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="mr-2"
        />
        <Button onClick={addTodo}>
          <Plus className="mr-2 h-4 w-4" /> Add
        </Button>
      </div>
      <ScrollArea className="h-[300px] w-full rounded-md border p-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between mb-2 p-2 bg-secondary rounded-md"
          >
            <div className="flex items-center">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              <span
                className={`${
                  todo.completed ? "line-through text-muted-foreground" : ""
                }`}
              >
                {todo.text}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteTodo(todo.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Todo;
