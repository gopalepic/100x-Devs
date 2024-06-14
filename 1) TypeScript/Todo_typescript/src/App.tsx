
import './App.css'
import { MdDone } from "react-icons/md";


   interface TodoType {
    title:string;
    description:string;
    done:boolean;
   }

   interface TodoInput{
    todo:TodoType;
   }
function App() {
  return (
  <Todo title='Jaishreeram' description='jaishreeram' done={true}></Todo>
  
  )
}

function Todo(todo:TodoType){
  return(
  <div>
  Todo web app
  <div style={{backgroundColor:"gray"}}>
   <h1> {todo.title}</h1>
  <h2> {todo.description}</h2> 
  
    <div>{
      todo.done == true ? <MdDone/> : " "
      }</div>
 </div>
  </div>)
}

export default App
