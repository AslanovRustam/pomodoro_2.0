import { useData } from "../helpers/DataContext";
import Container from "../components/Container/Container";
import TaskList from "../components/TaskList/TaskList";

export default function Tasks() {
  const { taskArr, setTaskArr, setUpdatebleTask, setShowmodal } = useData();

  return (
    <Container>
      <TaskList
        tasks={taskArr}
        setTaskArr={setTaskArr}
        setShowmodal={setShowmodal}
        setUpdatebleTask={setUpdatebleTask}
      />
    </Container>
  );
}
