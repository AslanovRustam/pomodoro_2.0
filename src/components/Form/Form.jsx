import { useState } from "react";
import { useLocalStorage } from "../../helpers/useLocalStorage";
import Button from "../Button/Button";
import s from "./form.module.css";

export default function Form({ onClose }) {
  const [taskArr, setTaskArr] = useLocalStorage("all_tasks");
  const [formData, setFormData] = useState({
    // id: "",
    // done: false,
    name: "",
    description: "",
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
      console.log("formData", formData);
      setFormData({
        name: "",
        description: "",
      });
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
