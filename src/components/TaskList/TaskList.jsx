import Task from "../Task/Task";
import s from "./taskList.module.css";
import toast from "react-hot-toast";
export default function TaskList({
  tasks,
  setTaskArr,
  setShowmodal,
  setUpdatebleTask,
}) {
  const handleProgressTask = (taskId, newDone) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: newDone } : task
    );
    setTaskArr(updatedTasks);
  };

  const currentTaskToUpdate = (id) => {
    return tasks.find((task) => task.id === id);
  };

  const handlDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTaskArr(updatedTasks);
    toast.error(
      `now your ${currentTaskToUpdate(id).name.toUpperCase()} is DELETED`
    );
  };
  const handleUpdateTaask = (updatedTask) => {
    setShowmodal(true);
    setUpdatebleTask({
      id: updatedTask.id,
      done: updatedTask.done,
      name: updatedTask.name,
      description: updatedTask.description,
    });
    toast(
      `now you editing ${currentTaskToUpdate(
        updatedTask.id
      ).name.toUpperCase()} task`,
      {
        style: {
          borderRadius: "0.2em",
          background: "#f60",
          color: "white",
        },
      }
    );
  };
  return (
    <ul className={s.list}>
      {tasks.map((item) => (
        <Task
          key={item.id}
          item={item}
          onTaskDone={handleProgressTask}
          onTaskDelete={handlDeleteTask}
          onTaskUpdate={handleUpdateTaask}
        />
      ))}
    </ul>
  );
}
