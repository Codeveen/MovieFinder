import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from "./components/nav"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Search from './Pages/Search/Search';


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/About" component={About}/>
        <Route path="/Search" component={Search}/>
      </Switch>
    </BrowserRouter>
  )
}



export default App;
