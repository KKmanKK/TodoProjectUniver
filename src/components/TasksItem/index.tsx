import React, { useEffect, useRef, useState } from 'react';
import style from './index.module.scss';
interface TasksItemProps {
  id: string;
  title: string;
  onEdited: (id: string, title: string) => void;
  onRemove: (id: string) => void;
}
export const TasksItem: React.FC<TasksItemProps> = ({
  id,
  title,
  onEdited,
  onRemove,
}) => {
  const [checked, setChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [valueEdit, setValueEdit] = useState(title);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isEditMode) {
      ref?.current?.focus();
    }
  }, [isEditMode]);
  return (
    <li className={style.task}>
      <label htmlFor="">
        <input
          type="checkbox"
          disabled={isEditMode}
          checked={checked}
          onChange={() => {
            setChecked((prev) => !prev);
          }}
          className={style.checked}
        />
        {isEditMode ? (
          <input
            type="text"
            value={valueEdit}
            ref={ref}
            onChange={(e) => setValueEdit(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onEdited(id, valueEdit);
                setIsEditMode((prev) => !prev);
              }
            }}
            className={style.taskTitleEdit}
          />
        ) : (
          <div className={style.title}>{title}</div>
        )}
      </label>
      {isEditMode ? (
        <button
          className={style.btnSave}
          onClick={() => {
            onEdited(id, valueEdit);
            setIsEditMode((prev) => !prev);
          }}
        />
      ) : (
        <button
          className={style.btnEdit}
          onClick={() => setIsEditMode((prev) => !prev)}
        />
      )}

      <button
        className={style.btnRemove}
        onClick={() => {
          if (confirm('Вы уверены?')) {
            onRemove(id);
          }
        }}
      />
    </li>
  );
};
