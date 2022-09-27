//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// Import Components
import Acceuil from './screens/acceuil';
import About from './screens/about';
import Contact from './screens/contact';
import User from './screens/User';
import Produit from './screens/Produit'


// Import dependencies of the navbar 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

// Import users data
import {users, products} from './data';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink className="mx-2 text-light" to={"/"}>Home</NavLink>
              <NavLink className="mx-2 text-light" to={"/about"}>About</NavLink>
              <NavLink className="mx-2 text-light" to="/contact">Contact</NavLink>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Acceuil users={users} produits={products}/> }>          
          </Route>
          {/*  exact used only to assure that the mentionned path is forced with no extra alphabetics in the path */}
          <Route exact path="/about" element={<About />}>          
          </Route>

          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/user/:id" element={<User  users={users} />}>
          </Route>
          <Route path="/produit/:id" element={<Produit  produits={products} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
