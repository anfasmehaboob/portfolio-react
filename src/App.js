// import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Home  from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'
import ProjectDetail from './pages/productDetail'


function App() {
  return (
    <div className="App">
     

      <Router>
      <Navbar className='w-100' />
      <Switch>
          <Route path="/" exact component={Home}>    
          </Route>
          <Route exact path="/project" component={Projects}>
          </Route>
          <Route path="/contact" component={Contact}>
          </Route>
          <Route path="/project/:id" component={ProjectDetail}>
          </Route>
          
        </Switch>
      </Router>
      
      
     
    
    </div>
  );
}

export default App;
