import './App.css';
import RootRouting from './Routing/RootRouting';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
   <RootRouting/>
   <ToastContainer /> 
    </div>
  );
}
export default App;
