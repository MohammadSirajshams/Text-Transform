import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
      <Navbar/>

      <div className="container">
      <Textarea heading="ENTER TEXT TO ANALYZE"/>
      </div>
    </>
  );
}

export default App;
