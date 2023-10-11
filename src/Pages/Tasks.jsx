import { useLocalStorage } from "../helpers/useLocalStorage";
import Container from "../components/Container/Container";
import TaskList from "../components/TaskList/TaskList";

const initTask = [
  {
    id: 1,
    done: false,
    name: "initial task",
    description: "start your journey",
  },
  {
    id: 2,
    done: false,
    name: "Second task",
    description: "end your journey",
  },
  {
    id: 3,
    done: false,
    name: "3 task",
    description: "end your journey",
  },
];

export default function Tasks() {
  const [taskArr, setTaskArr] = useLocalStorage("all_tasks", initTask);

  return (
    <Container>
      <TaskList tasks={taskArr} setTaskArr={setTaskArr} />
    </Container>
  );
}
