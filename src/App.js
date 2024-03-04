import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./Navbar.js"
import Card from "./Card.js"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>CS 230L</h1>
      <h2>Section - 001</h2>
      <p>WVU ID: 800391602</p>
      <p>Hi I am Simon Hale</p>
      <Card></Card>
    </div>
  );
}

export default App;
