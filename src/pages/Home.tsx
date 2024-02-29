import React from 'react';
import style from './Home.module.scss';
import { useToDoStore } from '../data/stores/useToDoStore';
import { InputPlus } from '../components/InputPlus';
import { TasksList } from '../components/TasksList';
export const Home: React.FC = () => {
  const { createTask, tasks } = useToDoStore();
  return (
    <section className={style.section}>
      <h1 className={style.sectionTitle}>To Do</h1>
      <article className={style.sectionInput}>
        <InputPlus
          onAdd={(title) => {
            if (title.trim()) {
              createTask(title);
            }
          }}
        />
      </article>
      <article className={style.sectionTodo}>
        <TasksList tasks={tasks} />
      </article>
    </section>
  );
};
