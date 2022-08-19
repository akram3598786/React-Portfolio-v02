import './App.css';
import {Profile} from "./components/Profile";
import {ShowTodos} from "./components/Todo";

const profileDetails={
 pic : "https://avatars.githubusercontent.com/u/57341544?v=4",
 name : "Akram",
 age : 22,
 loc : "Panipat",
 org : "MASAI School"
};

const TodoList = [
  { id: 1, title: "Wake up", status: true },
  { id: 2, title: "drink tea", status: false },
  { id: 3, title: "eat maggi", status: true },
  { id: 4, title: "sleep", status: false }
];

function App() {
  return (
    <div className="App">
      <div id='left'>{Profile(profileDetails)}</div>
      <div id='right'>
      <h1 className="center">Todos List</h1>
      <div>
         {ShowTodos(TodoList)}
         </div>

        </div>
    </div>
  );
}

export default App;
