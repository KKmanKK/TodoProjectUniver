import React from 'react';
import { Task, useToDoStore } from '../../data/stores/useToDoStore';
import { TasksItem } from '../TasksItem';
import style from './index.module.scss';
interface TasksListProps {
  tasks: Task[];
}
export const TasksList: React.FC<TasksListProps> = ({ tasks }) => {
  const { removeTask, updateTask } = useToDoStore();

  const onEdited = (id: string, title: string) => {
    updateTask(id, title);
  };
  const onRemove = (id: string) => {
    removeTask(id);
  };
  if (!tasks.length) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>Нету задач</p>;
  }
  return (
    <ul className={style.wrapper}>
      {tasks.map((task) => (
        <TasksItem
          key={task.id}
          id={task.id}
          title={task.title}
          onEdited={onEdited}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};
