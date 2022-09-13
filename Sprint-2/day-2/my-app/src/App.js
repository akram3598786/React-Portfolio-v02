import './App.css';
import Mobile_OS from "./Components/MobileOperSysytems";
import Mobile_manuf from "./Components/MobileManufacturers";
console.log(Mobile_OS());
function App() {
  return (
    <div className="App">
      <h4>Mobile Operating Systems</h4>
       <ul>{Mobile_OS()}</ul>
      <h4>Mobile Manufacturers</h4>
       <ul>{Mobile_manuf()}</ul>
    </div>
  );
}

export default App;
