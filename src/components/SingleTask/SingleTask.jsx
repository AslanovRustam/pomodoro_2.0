import { NavLink, useParams } from "react-router-dom";
import { useData } from "../../helpers/DataContext";
import Timer from "../Timer/Timer";
import Button from "../Button/Button";
import s from "./singleTask.module.css";

export default function SingleTask() {
  const { taskArr, setTaskArr, setUpdatebleTask, setShowmodal } = useData();
  const { id } = useParams();

  const currentTask = taskArr.find((item) => item.id === id);

  const handleProgressTask = (taskId, newDone) => {
    const updatedTasks = taskArr.map((task) =>
      task.id === taskId ? { ...task, done: newDone } : task
    );
    setTaskArr(updatedTasks);
  };
  const handleUpdateTaask = () => {
    setShowmodal(true);
    setUpdatebleTask({
      id: id,
      done: currentTask?.done,
      name: currentTask?.name,
      description: currentTask?.description,
    });
  };

  return (
    <>
      <div className={s.task}>
        <div className={s.textContainer}>
          <h2 className={`${s.name} ${currentTask?.done && s.crosed}`}>
            {currentTask?.name}
          </h2>
          <p className={s.description}>{currentTask?.description}</p>
        </div>
        <div className={s.buttons}>
          <NavLink to="/tasks" className={s.navlink}>
            Go Back
          </NavLink>
          <Button text="edit" width="50%" onClick={handleUpdateTaask} />
          <div className={s.inputContainer}>
            <input
              type="checkbox"
              className={`${s.input} ${currentTask?.done && s.checked}`}
              checked={currentTask?.done}
              onChange={() => handleProgressTask(id, !currentTask?.done)}
            />
            <p className={s.placeholder}>did you already done it?</p>
          </div>
        </div>
      </div>
      <div className={s.timer}>
        <Timer />
      </div>
    </>
  );
}
