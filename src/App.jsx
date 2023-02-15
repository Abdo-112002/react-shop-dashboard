import  react , {useRef} from 'react'
import Aside from './components/aside-bar/Aside';
import NavBar from './components/nav-bar/NavBar';
import './style/main.scss';


function App() {
  const navRef = useRef();
  
  const openSideMenu = ()=> {
    navRef.current.classList.toggle("active");
  }
 
  return (
    <div className='minWrapper d-flex'>
        <Aside navRef={navRef}/>
        <NavBar openSideMenu={openSideMenu}/>
    </div>
  )
}

export default App
