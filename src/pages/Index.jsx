import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ListTodo } from "lucide-react";

const Index = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Todo App</h1>
        <p className="text-xl mb-8">Stay organized and boost your productivity!</p>
        <Button asChild>
          <Link to="/todo" className="flex items-center">
            <ListTodo className="mr-2 h-4 w-4" />
            Go to Todo List
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
