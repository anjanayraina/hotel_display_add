import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard.js';
import AllHotels from './Components/AllHotels';
import AddHotel from './Components/AddHotel.js';
import AddHotelForm from './Components/AddHotelForm.js';
function App() {
  return (
    <div className="App">
   <Dashboard/>
      <AllHotels/> 

    
    </div>
  );
}

export default App;
