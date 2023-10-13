import Task from "../Task/Task";
import s from "./taskList.module.css";

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

  const handlDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTaskArr(updatedTasks);
  };
  const handleUpdateTaask = (updatedTask) => {
    setShowmodal(true);
    setUpdatebleTask({
      id: updatedTask.id,
      done: updatedTask.done,
      name: updatedTask.name,
      description: updatedTask.description,
    });
    // const updatedTasks = tasks.map((task) =>
    //   task.id === updatedTask.id ? updatedTask : task
    // );
    // setTaskArr(updatedTasks);
    console.log(updatedTask);
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
