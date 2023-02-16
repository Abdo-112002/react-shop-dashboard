
import React from 'react'

import {TiArrowSortedDown} from 'react-icons/ti';

function Select({optionData}) {
  return (
    <div className='selectBox'>
        <select>
                {
                  optionData?.map((item,ind)=>(
                    <option key={ind}>{item}</option>
                  ))
                }
        </select>
        <TiArrowSortedDown/>
    </div>
  )
}

export default Select
