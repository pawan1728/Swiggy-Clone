import './App.css';
import Footer from './components/Footer';
import ResHeader from './components/ResHeader';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <ResHeader/>
      <Outlet />
      <Footer />
    </div>
  );
}


export default App;
