import React from 'react';
import {NavLink} from 'react-router-dom';
import {imagePath} from '../asserts/ImagePath';
function SideNav(props) {
    return (
       <div className="sibe_nav">
           <div className="logo">
               <a>
                    <img src={imagePath('./logo.png').default} alt="weather" /> 
               </a>
           </div>
           <ul className="nav_list">
               <li><NavLink exact activeClassName="active"  to={'/'}><img src={imagePath('./add-user.png').default} alt="add user" /> Add User</NavLink></li>
               <li><NavLink exact activeClassName="active"  to={'/users'}><img src={imagePath('./users.png').default} alt="user" /> Users</NavLink></li>
               <li><NavLink exact activeClassName="active"  to={'/weather'}><img src={imagePath('./weather.png').default} alt="weather" /> Weather</NavLink></li>
           </ul>
       </div>
    );
}

export default SideNav;