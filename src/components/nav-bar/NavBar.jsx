import React from 'react'
import openMenu from '../../assets/openMenu.svg';
import userImg from '../../assets/user.png';

import {RiAddLine} from 'react-icons/ri';
import {TiArrowSortedDown} from 'react-icons/ti';

function NavBar({openSideMenu}) {
  return (
    <nav className='navBar'>
        <div className='row justify-content-between align-items-center'>
            <div className='navBar__openMenu' onClick={openSideMenu}>
                <img src={openMenu} alt='open menu icon'/>
            </div>
            <div className='navBar__user d-flex  align-items-center'>
                <button className='btn orderBtn'>
                    <RiAddLine size={17}/>
                    <span>new order</span>
                </button>
                <div className='navBar__user--img'>
                    <img src={userImg} alt='user-img'/>
                </div>
                <div>
                    <TiArrowSortedDown/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
