import { useState } from "react";
import { nanoid } from "nanoid";
import { useData } from "../../helpers/DataContext";
import Button from "../Button/Button";
import s from "./form.module.css";

export default function Form({ onClose }) {
  const { taskArr, setTaskArr, updateableTask, setUpdatebleTask } = useData();

  const [formData, setFormData] = useState({
    name: updateableTask.name ? updateableTask.name : "",
    description: updateableTask.description ? updateableTask.description : "",
  });
  const [showErrors, setShowErrors] = useState({
    name: false,
    description: false,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    setFormData({
      name: "",
      description: "",
    });
    setShowErrors({
      name: false,
      description: false,
    });
    setUpdatebleTask({
      id: "",
      done: "",
      name: "",
      description: "",
    });
    onClose();
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const newShowErrors = {};
    let hasError = false;
    Object.keys(formData).forEach((inputKey) => {
      if (!formData[inputKey]) {
        newShowErrors[inputKey] = true;
        hasError = true;
      } else {
        newShowErrors[inputKey] = false;
      }
    });

    setShowErrors(newShowErrors);

    if (!hasError) {
      const newTask = {
        id: nanoid(),
        done: false,
        name: formData.name,
        description: formData.description,
      };
      if (updateableTask.id) {
        const updatedTaskArr = taskArr.map((item) =>
          item.id === updateableTask.id
            ? {
                ...item,
                name: formData.name,
                description: formData.description,
              }
            : item
        );
        setTaskArr(updatedTaskArr);
        setFormData({
          name: "",
          description: "",
        });
        onClose();
        return;
      }

      setTaskArr([...taskArr, newTask]);
      setFormData({
        name: "",
        description: "",
      });
      onClose();
    }
  };
  return (
    <form className={s.form}>
      <label className={s.label}>
        <span className={s.inputText}>name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {showErrors.name && (
          <span className={s.error}>Please fill your task name</span>
        )}
      </label>
      <label className={s.label}>
        <span className={s.inputText}>description</span>
        <input
          className={s.input}
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        {showErrors.description && (
          <span className={s.error}>Please fill your task description</span>
        )}
      </label>
      <div className={s.buttons}>
        <Button
          text="save"
          width="50%"
          type="submit"
          onClick={handleFormSubmit}
        />
        <Button text="close" width="50%" onClick={handleClose} />
      </div>
    </form>
  );
}
