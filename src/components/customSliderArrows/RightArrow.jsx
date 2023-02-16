
import React from 'react'

import {IoIosArrowForward} from 'react-icons/io';

function RightArrow(props) {
  return (<IoIosArrowForward onClick={props.onClick} className={props.currentSlide+1 === props.slideCount ? 'arrow rightArrow stop' : 'arrow rightArrow'}/>)
}

export default RightArrow

