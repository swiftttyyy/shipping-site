import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';


function App() {
  return (
    <div className="App">
<Header/>
<div>
<Outlet/>
</div>
    </div>
  );
}

export default App;
