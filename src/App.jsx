import { useCallback, useRef } from 'react';
import Aside from './components/aside-bar/Aside';
import NavBar from './components/nav-bar/NavBar';
import UploadProducts from './pages/upload-images/UploadProducts';
import './style/main.scss';


function App() {
  const navRef = useRef();
  
  const openSideMenu = useCallback(()=> {
    navRef.current.classList.toggle("active");
  },[]);
 
  return (
    <div className='minWrapper d-flex'>
        <Aside navRef={navRef}/>
        <div style={{width :"100%"}}>
          <NavBar openSideMenu={openSideMenu}/>
          <UploadProducts/>
        </div>
    </div>
  )
}

export default App
