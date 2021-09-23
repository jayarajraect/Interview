import React , { useState , useRef , useEffect} from 'react';
import {imagePath} from '../asserts/ImagePath';
var date = Date()
function Header(props) {
    return (
       <header>
           <span>{date.slice(0,10)} {date.slice(15,21)}</span>
           <div className="user_profile">Welcome John<img className="left_sign_up_img" src={imagePath('./user-icon.png').default} alt="" /></div>
       </header>
    );
}

export default Header;