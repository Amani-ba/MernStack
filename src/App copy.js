//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/home';

import {Button} from 'react-bootstrap'
import { useState } from 'react';
function App() {
  const users = [ {name:'hh', age:25}, {name:'ded', age:55}, {name:'deddd', age:35}]
//  const user = {name:'hh', age:25};
  const toogle = true
  const [search, setSearch] = useState()
  console.log('search => ', search);
  return (
    <div className="App">
     <Button variant="success" style={{fontSize: "2rem"}}>Save</Button>
      <input placeholder='search' onChange={(e)=> { setSearch(e.target.value)}}></input>
     {
     users.filter(item=>{ return item.name.includes(search)}).map(item=>(
     <Home name={item.name} age={item.age}/>

     ))}
    </div>
  );
}

export default App;
