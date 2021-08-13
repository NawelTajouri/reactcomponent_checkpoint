import './App.css';
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import AddressFile from "./Component/Profile/Address";

const App = () => (
 <>
 <div className='MyApp'>
   <div className='aboutMe'>
      <ProfilePhoto />
      <FullName />
      <AddressFile />
   </div>
   
 </div>
   
   
 </>
);
export default App;
