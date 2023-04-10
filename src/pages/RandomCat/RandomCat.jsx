import  React, { useState } from 'react';
import './randomCat.css';

const RandomCat = () => {
    const [imgUrl, setUrl] =useState("https://cdn2.thecatapi.com/images/DZba-eH_4.jpg");
    const callImg=()=>{
      fetch("https://api.thecatapi.com/v1/images/search")
      .then(res=>res.json())
      .then(data=>setUrl(data[0].url))
    }
    return (
        <>
          <div className="random_container">
          <h2 className='random_p'>Start your day with a cat pic</h2>
            <div className="random_box">
               
                <img className="random_img"src={imgUrl}/>
                <button className='random_button' onClick={()=>callImg()}>Click me</button>
            </div>
          </div>
        </>
    );
}


export default RandomCat