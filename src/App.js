
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/AddItem/AddItem';

import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home/Home';
import ManageInventory from './Components/Inventory/ManageInventory/ManageInventory';

import InventoryDetail from './Components/InventoryDetail/InventoryDetail';
import ManageItems from './Components/ManageItems/ManageItems';
import MyItem from './Components/MyItem/MyItem';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';
// import SmartWay from './Components/SmartWay/SmartWay';

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
         
     <Route path='/manageinventory' element={
       <RequireAuth>
         <ManageInventory></ManageInventory>
       </RequireAuth>
     }
     ></Route>    
     <Route path='/additem' element={
       <RequireAuth>
         <AddItem> </AddItem>
       </RequireAuth>
     }
     ></Route>
     <Route path='/manageitem' element={
       <RequireAuth>
         <ManageItems> </ManageItems>
       </RequireAuth>
     }
     ></Route>
     <Route path='/myitem' element={
       <RequireAuth>
         <MyItem> </MyItem>
       </RequireAuth>
     }
     ></Route>
     {/* <Route path='smartway' element={<SmartWay> </SmartWay>}></Route> */}
      <Route path='*' element={<NotFound></NotFound>}></Route>
   </Routes>
   <Footer></Footer>
  
   </>

  );
}

export default App;
