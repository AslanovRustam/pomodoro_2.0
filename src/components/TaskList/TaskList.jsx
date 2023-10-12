import Task from "../Task/Task";
import s from "./taskList.module.css";

export default function TaskList({ tasks, setTaskArr }) {
  const handleTaskChange = (taskId, newDone) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: newDone } : task
    );
    setTaskArr(updatedTasks);
  };

  const handlDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTaskArr(updatedTasks);
  };
  return (
    <ul className={s.list}>
      {tasks.map((item) => (
        <Task
          key={item.id}
          item={item}
          onTaskChange={handleTaskChange}
          onTaskDelete={handlDeleteTask}
        />
      ))}
    </ul>
  );
}
