import './App.css';
import CompA from './Components/CompA.js';
import B from './Components/B.js';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function App() {
const details= [
  {
    NAME:"Srinivas",
    ROLL:633
  }
  ,
  {
    NAME:"lahari",
    ROLL:143
  }
];

  return (
 <>
   <BrowserRouter>
   <ul>
    <li>
   <Link to='/compA'>Click to compA</Link>
   </li>
   <li>
   <Link to='/compB'>Click to compB</Link>
   </li>
   </ul>git branch -M main
   <Routes>
     <Route path='/compA' element={<CompA data={details}/>}></Route>
     <Route path='/compB' element={<B data={details}/>}></Route>
     
   </Routes>
   </BrowserRouter>



 {/*<CompA data={details}/>*/}
 </>
  );
}

export default App;