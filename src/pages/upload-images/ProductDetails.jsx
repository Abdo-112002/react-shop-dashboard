import React, { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import infoIcon from '../../assets/info.svg';
import ImgSvgCreator from '../../components/ImgSvgCreator';

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import LiftArrow from '../../components/customSliderArrows/LeftArrow';
import RightArrow from '../../components/customSliderArrows/RightArrow';


const ProductDetails = () => {

    const [cardColor , setCardColor]  = useState({
        id : 1 ,
        color : '#BA702C',
    });

    function setColor(id,color) {
        console.log({id,color})
        setCardColor({id : id , color :color});
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow : <LiftArrow/>,
        nextArrow : <RightArrow/>,
    };

    const products = [
        {id : 1,productColor : '#BA702C'},
        {id : 2,productColor : '#052B66'},
        {id : 3,productColor : '#38643B'},
        {id : 4,productColor : '#A2A4A5'},
        {id : 5,productColor : '#EE0000'},
        {id : 6,productColor : '#BA2B94'},
        {id : 7,productColor : '#69BB2C'},
        {id : 8,productColor : '#BA2B2C'},
        {id : 9,productColor : '#72001C'},
        {id : 10,productColor : '#000000'},
        {id : 11,productColor : '#E04F50'},
        {id : 12,productColor : '#732BBD'},
    ]

  return (
    <div className='uploadImages__imgCard'>
        <div className='content'>
            <div className='uploadImages__imgCard--img'>
                <ImgSvgCreator color={cardColor.color}/>
            </div>
            <div className='details'>
                <div className='uploadImages__imgCard--info d-flex justify-content-between'>
                    <h3 className='title'>SR23 - BOSS Black Menswear</h3>
                    <div className='img-count'>
                        <img src={infoIcon} alt='icon'/>
                        <span>23/189</span>
                    </div>
                </div>
                <div className='sliderWrapper'>
                    <Slider {...settings}>
                        <div className='sliderWrapper__slide'>
                            {
                                products?.map((item)=>(
                                    <div 
                                    key={item.id}
                                    onClick={()=> setColor(item.id,item.productColor)}
                                    className={item.id == cardColor.id ? 'item active':'item'}
                                    >
                                        <ImgSvgCreator color={item.productColor}/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='sliderWrapper__slide'>
                            {
                                products?.map((item)=>(
                                    <div 
                                    key={item.id}
                                    onClick={()=> setColor(item.id,item.productColor)}
                                    className={item.id === cardColor.id ? 'item active':'item'}
                                    >
                                        <ImgSvgCreator color={item.productColor}/>
                                    </div>
                                ))
                            }
                        </div>
                    </Slider>
                </div>
                <button className='btn addMoreBtn'>
                    <RiAddLine size={17}/>
                    <span>add more</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
