import { createContext, useState, useContext, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';

const TaskContext = createContext();

export const TaskProvider = (props) => {
  const DEMOTASKS = [
    {
      id: 1,
      task: 'React Native Course',
      completed: true,
    },

    {
      id: 2,
      task: 'React Project',
      completed: false,
    },

    {
      id: 3,
      task: 'Read the book',
      completed: false,
    },
  ];

  const [taskList, setTaskList] = useState(DEMOTASKS);
  const [tasksList, setTasksList] = useState([]);

  const addTaskHandler = (task) => {
    if (task !== '') {
      setTaskList((prevTaskList) => {
        return [
          { task: task, completed: false, id: Math.random().toString() },
          ...prevTaskList,
        ];
      });
    }
  };

  const deleteTaskHandler = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  //FIREBASE API

  const taskCollectionRef = collection(db, 'tasks');

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const data = getDoc(taskCollectionRef);
  //     if (data) {
  //       console.log(data);
  //     }
  //   };
  //   getTasks();
  // }, [taskCollectionRef]);

  const getTasks = async () => {
    const data = await getDocs(taskCollectionRef);
    setTasksList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        addTaskHandler,
        deleteTaskHandler,
        getTasks,
        tasksList,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
