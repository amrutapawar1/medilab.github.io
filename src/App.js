import './App.css';
import { useLocation } from "react-router-dom";
import PageRoute from './routes/PageRoute';


function App() {
  const { pathname } = useLocation();
 
  return (

    <div className="App" >
      <PageRoute />
    </div>

  );
}

export default App;
