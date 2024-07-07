import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
<Header/>
<div>
<Outlet/>
</div>
<Footer/>
    </div>
  );
}

export default App;
