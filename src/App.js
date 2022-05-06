
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home/Home';
import ManageInventory from './Components/Inventory/ManageInventory/ManageInventory';

import InventoryDetail from './Components/InventoryDetail/InventoryDetail';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
   <>
   <Header> </Header>
   <Routes>
   <Route path='/' element={<Home> </Home>}></Route>
   {/* <Route path='/inventory/:inventoryId' element={<ManageInventory> </ManageInventory>}></Route> */}
   <Route path='/login' element={<Login> </Login>}></Route>
   <Route path='/register' element={<Register></Register>}></Route>
   <Route path='/blog'  element={<Blog></Blog>}></Route>
   <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail> </InventoryDetail>
          </RequireAuth>
         }></Route>
         
     <Route path='/inventory' element={
       <RequireAuth>
         <ManageInventory></ManageInventory>
       </RequireAuth>
     }
     ></Route>    
   </Routes>
   </>

  );
}

export default App;
