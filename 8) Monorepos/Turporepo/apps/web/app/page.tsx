
import Signup from '@repo/ui/Signup'
import {BrowserRouter as Routes , Router , Route} from 'react-router-dom'

export default function Home() {
  return (
    <>
    <Routes>
         <Route path='/signup' element={<Signup/>}></Route>
    </Routes>  
  
    </>
  );
}
