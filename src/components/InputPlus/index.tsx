import React, { useCallback, useState } from "react";
import style from "./index.module.scss";
interface InputPlusProps {
  onAdd: (title: string) => void;
}
export const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
  const [value, setValue] = useState("");
  const addTask = useCallback(() => {
    onAdd(value);
    setValue("");
  }, [value]);
  return (
    <div className={style.wrapper}>
      <input
        placeholder="Какой то текст"
        type="text"
        className={style.input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />
      <button onClick={addTask} className={style.btn} />
    </div>
  );
};
