import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
