import './App.css';
import {useEffect, useState} from 'react';
import db from './BackEnd/firebaseApp';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async() =>{

    // db.collection('todos').onSnapshot(snapshot=>{
    //   console.log(snapshot.docs.map(doc=>doc.data().todo))
    // })
    const todoCollection = collection(db, 'todos');
    const snapshot = await getDocs(todoCollection);
    const list = snapshot.docs.map(doc => doc.data().todo);
    setTodoData(list);
  }

  const pushData=()=>{
    // db.ref("todos").set({
    //   todo : 'firebase',
    // }).catch(alert);
    // const db = db.database().ref();
    const a = db.database().ref('todos/todo');
    a.set('firebase');

  }
  return (
    <div className="App">

      {todoData.map((item,index)=>{
        return(<li>{item}</li>)}
      )}

      <button onClick={pushData}>PushData</button>
      <button onClick={getData}>getData</button>
    </div>
  );
}

export default App;
