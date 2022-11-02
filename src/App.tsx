import React from 'react';

import "./scss/app.scss";
import Header from "./components/Header";
import ListTodo from "./components/ListTodo";
import TodoAddForm from "./components/TodoAddForm";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <ListTodo />
        <TodoAddForm />
      </div>
    </div>
  );
}

export default App;
