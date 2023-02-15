
import React from 'react';


import logo from '../../assets/Logo.svg';
import sideIcon1 from '../../assets/Vector1.svg';
import sideIcon2 from '../../assets/Vector2.svg';
import sideIcon3 from '../../assets/Vector3.svg';
import sideIcon4 from '../../assets/Vector4.svg';
import sideIcon5 from '../../assets/Vector5.svg';
import sideIcon6 from '../../assets/Vector6.svg';
import sideIcon7 from '../../assets/Vector7.svg';
import sideIcon8 from '../../assets/Vector8.svg';
import sideIcon9 from '../../assets/Vector9.svg';
import sideIcon10 from '../../assets/Vector10.svg';
import sideIcon11 from '../../assets/Vector11.svg';

function Aside({navRef}) {

  return (
        <aside className="aside" ref={navRef}>
            <div className="aside__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="content">
                <div>
                    <h3 className='aside__title'>Dashboard</h3>
                    <div className="aside__item">
                        <div className="icon">
                        <img src={sideIcon1} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title'>Dashboard</span>
                    </div>
                </div>
                <div>
                    <h3 className='aside__title'>users</h3>
                    <div className="aside__item">
                        <div className="icon">
                        <img src={sideIcon2} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title'>users</span>
                    </div>
                    <div className="aside__item">
                        <div className="icon">
                        <img src={sideIcon3} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title'>clients</span>
                    </div>
                </div>

                <div>
                    <h3 className='aside__title'>stoke</h3>
                    <div className="aside__item">
                        <div className="icon">
                        <img src={sideIcon4} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title'>upload</span>
                    </div>
                    <div className="aside__item active">
                        <div className="icon">
                        <img src={sideIcon5} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title' >upload images</span>
                     </div>
                     <div className="aside__item">
                        <div className="icon">
                        <img src={sideIcon6} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title' >Catalogues</span>
                     </div>
                     <div className="aside__item">
                        <div className="icon">
                        <img src={sideIcon7} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title' >Products</span>
                     </div>
                     <div className="aside__item">
                        <div className="icon">
                        <img src={sideIcon8} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title' >Price List</span>
                     </div>
                     <div className="aside__item">
                        <div className="icon">
                        <img src={sideIcon9} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title' >Variations</span>
                     </div>
                </div>
               
               <div>
                 <h3 className='aside__title'>order</h3>
                    <div className="aside__item">
                        <div className="icon">
                        <img src={sideIcon10} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title' >Preorder</span>
                    </div>
                    <div className="aside__item">
                        <div className="icon">
                        <img src={sideIcon11} alt="Your SVG" />
                        </div>
                        <span className='aside__item--title' >Admin Preorder</span>
                    </div>
               </div>
               
            </div>
        </aside>
  )
}

export default Aside
