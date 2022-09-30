import React from 'react';
import './File.css';

const File = (props) => {
    const {handleClick, file} = props;
    const{name, img, age, time }  = file;

    return (
        <div className='files'>
            <img className='image' src={img} alt="" />
            <div className='docs'>
                <h3>{name}</h3>
                <p>For age : {age}</p>
                <p>Time Required: {time} H</p>
            </div>
            <button onClick={()=> handleClick(file)} className='btn-lists'>Add to list</button>
        </div>
    );
};

export default File;