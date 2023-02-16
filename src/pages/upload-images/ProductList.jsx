import React from 'react'
import Select from '../../components/custom-select/Select'
import ImgSvgCreator from '../../components/ImgSvgCreator'

import copyLinkIcon from '../../assets/copyLink.svg';
import deleteIcon from '../../assets/deleteIcon.svg';

function ProductList() {
  return (
    <div className='uploadImages__imgList'>
      <div className='wrapper'>
        <div className='content'>
            <div className='uploadImages__imgList--item '>
                <div className='imgWrapper'>
                    <ImgSvgCreator color={'#BA702C'}/>
                </div>
                <Select optionData={['Typin','Data']}/>
                <Select optionData={['Color Code','Data Test']}/>
                <div>
                    <button className='btn copy'>
                        <img src={copyLinkIcon} alt='icon'/>
                    </button>
                </div>
                <div>
                    <button className='btn delete'>
                        <img src={deleteIcon} alt='icon'/>
                    </button>
                </div>
            </div>

            <div className='uploadImages__imgList--item '>
                <div className='imgWrapper'>
                    <ImgSvgCreator color={'#052B66'}/>
                </div>
                <Select optionData={['73kfk','87otur']}/>
                <Select optionData={['88756','977456']}/>
                <div>
                    <button className='btn copy'>
                        <img src={copyLinkIcon} alt='icon'/>
                    </button>
                </div>
                <div>
                    <button className='btn delete'>
                        <img src={deleteIcon} alt='icon'/>
                    </button>
                </div>
            </div>

            <div className='uploadImages__imgList--item '>
                <div className='imgWrapper'>
                    <ImgSvgCreator color={'#2B98BD'}/>
                </div>
                <Select optionData={['HGJJDK','KSKSKJ']}/>
                <Select optionData={['685478','87956']}/>
                <div>
                    <button className='btn copy'>
                        <img src={copyLinkIcon} alt='icon'/>
                    </button>
                </div>
                <div>
                    <button className='btn delete'>
                        <img src={deleteIcon} alt='icon'/>
                    </button>
                </div>
            </div>

            <div className='uploadImages__imgList--item '>
                <div className='imgWrapper'>
                    <ImgSvgCreator color={'#EE0000'}/>
                </div>
                <Select optionData={['UURYYR','KSKJDH']}/>
                <Select optionData={['98523','751258']}/>
                <div>
                    <button className='btn copy'>
                        <img src={copyLinkIcon} alt='icon'/>
                    </button>
                </div>
                <div>
                    <button className='btn delete'>
                        <img src={deleteIcon} alt='icon'/>
                    </button>
                </div>
            </div>

            <div className='uploadImages__imgList--item '>
                <div className='imgWrapper'>
                    <ImgSvgCreator color={'#732BBD'}/>
                </div>
                <Select optionData={['UTYET','JGHDF']}/>
                <Select optionData={['987456','12548']}/>
                <div>
                    <button className='btn copy'>
                        <img src={copyLinkIcon} alt='icon'/>
                    </button>
                </div>
                <div>
                    <button className='btn delete'>
                        <img src={deleteIcon} alt='icon'/>
                    </button>
                </div>
            </div>

            <div className='uploadImages__imgList--item '>
                <div className='imgWrapper'>
                    <ImgSvgCreator color={'#732BBD'}/>
                </div>
                <Select optionData={['TYPKN','HSFGS']}/>
                <Select optionData={['782025','21036']}/>
                <div>
                    <button className='btn copy'>
                        <img src={copyLinkIcon} alt='icon'/>
                    </button>
                </div>
                <div>
                    <button className='btn delete'>
                        <img src={deleteIcon} alt='icon'/>
                    </button>
                </div>
            </div>

            <div className='uploadImages__imgList--item '>
                <div className='imgWrapper'>
                    <ImgSvgCreator color={'#732BBD'}/>
                </div>
                <Select optionData={['GHBSF','IUJSF']}/>
                <Select optionData={['987520','875222']}/>
                <div>
                    <button className='btn copy'>
                        <img src={copyLinkIcon} alt='icon'/>
                    </button>
                </div>
                <div>
                    <button className='btn delete'>
                        <img src={deleteIcon} alt='icon'/>
                    </button>
                </div>
            </div>
        </div>
      </div>
      <div className='d-flex column-gap10 w-fit ml-auto mt-20 '>
        <button className='btn cancelBtn'>cancel</button>
        <button className='btn saveBtn'>save</button>
      </div>
    </div>
  )
}

export default ProductList
