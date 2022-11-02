import React from 'react';

import styles from './ListTodo.module.scss';

const ListTodo = () => {
  const todos = [{
    id: 1,
    title: 'make todo',
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
        {todos.map(todo => <div>{todo.title}</div>)}
      </div>
    </div>
  );
};

export default ListTodo;