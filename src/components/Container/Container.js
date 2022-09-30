
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

import File from '../File/File';
import Profile from '../Profile/Profile';
import './Container.css';

const Container = () => {
    const breakTime = [
        {time:12, id:1},
        {time:15, id:11},
        {time:17, id:12},
        {time:19, id:13}
    ]

    const [times, setTimes] = useState([]);
    const [files, setFiles] = useState([]);
    const [profile, setProfile] = useState([]);


    useEffect( () => {
        fetch('file.json')
        .then(res => res.json())
        .then(data=> setFiles(data))
    } ,[])
    useEffect(() =>{
        const storedCart= getLocal();
        console.log(storedCart);
        setTimes(storedCart)
    } ,[])
    
    const handleClick = (fil) =>{
        const newProfile = [...profile, fil]
        setProfile(newProfile);

    }
    const clicks = (tim) =>{
        console.log(tim)
        callLocal(tim.time);
        setTimes(tim.time);
    }
    const callLocal = (id) =>{
        let cart = {};
        cart = id;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    const getLocal = () =>{
        const storedCart = localStorage.getItem('cart');
        let cart = {};
        if(storedCart){
            cart = JSON.parse(storedCart);


        }
        console.log(cart)
        
        return cart;
    }
    
    
    

    return (
        <div className='container'>
            <div className='lSide-container'>
             <Header></Header>   
            <div className="study-container">
            {
                        files.map(file => <File 
                            key={file.id}
                            file={file}
                            handleClick = {handleClick}
                            ></File>)
                    }
                
            </div>
            </div>
            <div className="side-container">
                <h1>Mohiuddin Shimul</h1>
                <p>Toronto, CA</p>
                <br />
                <h2>Add A Break</h2>
                <div  className='dis'>
                {
                    breakTime.map(times => <button className='btnss' onClick={()=> clicks(times)}>{times.time}m</button>)
                }
                </div>
                <Profile times={times} profile={profile}></Profile>
            </div>
        </div>
    );
};

export default Container;