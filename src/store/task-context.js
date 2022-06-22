import { createContext, useState, useContext } from 'react';
import { db } from '../firebase-config';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from '@firebase/firestore';

const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [tasksList, setTasksList] = useState([]);

  const taskCollectionRef = collection(db, 'tasks');

  const getTasks = async () => {
    const data = await getDocs(taskCollectionRef);
    setTasksList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const createTask = async (task) => {
    if (task !== '') {
      await addDoc(taskCollectionRef, { task: task, completed: false });
    }
  };

  const updateTask = async (id, completed) => {
    const taskDoc = doc(db, 'tasks', id);
    const newFields = { completed: !completed };
    await updateDoc(taskDoc, newFields);
  };

  const deleteTask = async (id) => {
    const taskDoc = doc(db, 'tasks', id);
    await deleteDoc(taskDoc);
  };

  return (
    <TaskContext.Provider
      value={{
        getTasks,
        tasksList,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
