
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import ManageInventory from './Components/Inventory/ManageInventory/ManageInventory';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
   <>
   <Header> </Header>
   <Routes>
   <Route path='/' element={<Home> </Home>}></Route>
   {/* <Route path='/inventory/:inventoryId' element={<ManageInventory> </ManageInventory>}></Route> */}
   </Routes>
   </>

  );
}

export default App;
