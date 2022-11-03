import React from 'react';

import styles from './ListTodo.module.scss';
import Todo from "../Todo";

const ListTodo = () => {
  const todos = [{
    id: 1,
    title: 'makedddddddddddddddddddddddddd todo',
    isDoing: true,
  }, {
    id: 2,
    title: 'make todo',
    isDoing: true,
  }, {
    id: 3,
    title: 'make todo',
    isDoing: true,
  },]

  return (
    <div className={styles.todos_list}>
      <div className={styles.todos_list__title}>
        Your TODO list:
      </div>
      <div className={styles.todos_list__content}>
        {todos.map(todo => <Todo {...todo}/>)}
      </div>
    </div>
  );
};

export default ListTodo;