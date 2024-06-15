
import { useState } from 'react'
import './App.css'
import Card from './components/Card.tsx'
import Loadingbar from './components/Lodingbar.tsx'
import Tasklist from './components/Tasklists.tsx'
function App() {

  return (
    <div className='text-3xl'>
      
      <div>Todo List</div>

      <div className='flex justify-between my-5'>
             <div className='w-screen'>
                 <Card></Card>
              </div>
              <div className='w-screen'>
                 <Tasklist />
              </div>
      </div>
    </div>
  )
}

export default App
