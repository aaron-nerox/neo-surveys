// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      

      <Routes>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/users">
          <Users />
        </Route>

        <Route path="/">
          <Home />
        </Route>
        
      </Routes>

    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
