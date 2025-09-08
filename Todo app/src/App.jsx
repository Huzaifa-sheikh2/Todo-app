import "./App.css";
import Navbar from "./component/Navbar";
function App() {
 
  return(
    <>
    <Navbar/>
    <div className="container mx-auto">
    <div className="bg-blue-400 text-white text-center p-4 rounded-md mt-4">
      <h1>Your TODO</h1>
    </div>
    </div>
    </>
  )
  
}

export default App;
