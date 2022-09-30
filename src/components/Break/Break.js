import React from 'react';

const Break = () => {
    // const breakTime = [
    //     {time:12, id:1},
    //     {time:15, id:11},
    //     {time:17, id:12},
    //     {time:19, id:13}
    // ]
    useEffect(() =>{
        const storedCart= getLocal();
        console.log(storedCart);
        setTimes(storedCart)
    } ,[])
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
        <div>
            
        </div>
    );
};

export default Break;