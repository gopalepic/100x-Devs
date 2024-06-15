import React,{useState,useEffect} from 'react'


const Card = () => {

  interface Todo{
    title:string,
    description:string,
  }

  const [todolist , setTodoList] = React.useState<Todo[]>([]);
  const [title,setTitle] = React.useState('');
  const [description,setDescription] = React.useState('');

  const AddClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
    if(title && description){
     
      const newTodo: Todo = {title,description};
      setTodoList([...todolist,newTodo]);
      setTitle('');
      setDescription('');
    }
  }


  return (
    <div className='bg-[#242424] shadow-2xl border rounded-3xl text-black flex flex-col '>
          <div className=''>
           <div className='text-[#7264b0] font-bold'> Enter task details</div>
            <div className=' flex flex-col m-3'>

                <input className='mx-4 rounded-xl w-4/5 text-white' type="text" placeholder='Enter title... '
                value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}}/>

                <input  className='m-4 rounded-xl w-4/5 text-white' type="text" placeholder='Enter task details...'
                value={description}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setDescription(e.target.value)}}/>

                <button className='m-2 w-1/2 rounded-xl  bg-white font-bold  mx-auto' type="button"
                onClick={()=>{AddClick} }>Add todo</button>
            </div>
          </div>
    </div>
  )
}

export default Card
