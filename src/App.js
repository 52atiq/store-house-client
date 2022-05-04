
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
   <>
   <Header> </Header>
   <Routes>
   <Route path='/' element={<Home> </Home>}></Route>
   </Routes>
   </>

  );
}

export default App;
