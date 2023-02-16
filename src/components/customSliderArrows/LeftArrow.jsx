
import React from 'react'

import {IoIosArrowBack} from 'react-icons/io';

function LeftArrow(props) {
  return (<IoIosArrowBack onClick={props.onClick} className={props.currentSlide === 0 ? 'arrow leftArrow stop' : 'arrow leftArrow'}/>)
}

export default LeftArrow
