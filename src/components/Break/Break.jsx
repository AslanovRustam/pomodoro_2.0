import s from "./break.module.css";
import { useData } from "../../helpers/DataContext";
import { useState } from "react";

export default function Break() {
  const { timerSettings } = useData();
  const [initialtimeForBreak] = useState(timerSettings.rest);
  console.log(initialtimeForBreak);
  return <div>{initialtimeForBreak}</div>;
}
