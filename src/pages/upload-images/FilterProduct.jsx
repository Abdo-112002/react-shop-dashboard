

import React, { useState } from 'react';

import filterIcon from '../../assets/filterIcon.svg';
import Select from '../../components/custom-select/Select';
import TagsInput from '../../components/inputTag/TagsInput';

function FilterProduct() {
    const [tags, setTags] = useState(['Adidas', 'Puma']);
    const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = (value)=> {
		if (value !== "") {
			setTags([...tags, value]);
			props.selectedTags([...tags, value]);
		}
	};
  return (
    <div className='uploadImages__imgFilter'>
        <div className='filter-brand d-flex column-gap align-items-center'>
            <div className='d-flex column-gap10 '>
                <img src={filterIcon} alt='icon'/>
                <span>Filters</span>
            </div>
            <Select optionData={['Brand','Brand2']}/>
        </div>
        <div className='filter-input'>
            <TagsInput tags={tags} addTag={addTags} removeTags={removeTags}/>
        </div>
        <div className='filter-area'>
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-close-icon' onClick={() => removeTags(index)}>
                            x
                        </span>
                        <span className='tag-title'>{tag}</span>
                    </li>
                ))}
            </ul>
            {
                tags.length > 0 && <span className='tag-close-icon removeAll' onClick={()=> setTags([])}>x</span>
            }
        </div>
    </div>
  )
}

export default FilterProduct
