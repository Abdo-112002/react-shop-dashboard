
import React , {useRef} from "react";

import {RiAddLine} from 'react-icons/ri';

const TagsInput = ({tags,addTag , removeTags}) => {
    const tagRef = useRef();

    const addItem = () => {
        addTag(tagRef.current.value);
        tagRef.current.value = "";
    }
    

	return (
		<div className="tags-input">
			<ul id="tags">
				{tags.map((tag, index) => {
                    if(index > 2) return;
                    return <li key={index} className="tag">
                                <span className='tag-close-icon' onClick={() => removeTags(index)}>
                                    x
                                </span>
                                <span className='tag-title'>{tag}</span>
					        </li>
                })}
			</ul>
			<input
				type="text"
                ref={tagRef}
				onKeyUp={event => event.key === "Enter" ? addItem() : null}
				placeholder="Press enter to add tags"
			/>
            <div onClick={()=> addItem()} className="addTag">
                <RiAddLine size={16}/>
            </div>
		</div>
	);
};

export default TagsInput;