import React , { useState , useEffect} from 'react';
import {imagePath} from '../asserts/ImagePath';
const userdata = JSON.parse(localStorage.getItem('storedUserDetails'))
function Users(props) {
    const[searchKey , setsearchkey] = useState('')
    const[userdetails , setuserdetails] = useState(userdata)
    const serarchoperation = (e) => {
        setsearchkey(e.target.value);
    }
    useEffect(() => {
        const results = userdata.filter(userinfo => userinfo.username.toLowerCase().includes(searchKey));
        setuserdetails(results)
    }, [searchKey]);
    return (
       <>
        <div className="page_title">Users</div>
        <div className="user_content">
            <div className="search_wrap">
                <label className="form_label_search">Search</label>
                <div className="input_addon">
                    <input type="text" className="search_input" value={searchKey || ''} placeholder="Search user by name . . . " name="search_keyword" onChange={(e) => serarchoperation(e)} />
                    <img className="addon_input" src={imagePath('./search.png').default} alt="search" />
                </div>
            </div>
            <div className="view_title">Card View</div>
            {userdetails.length ? <div className="card_wrap">
                {userdetails.map(userData => (
                    <div key={userData.phoneNumber} className="card_layout">
                        <div className="card_inner_wrap">
                            <img src={imagePath('./user-icon.png').default} />
                            <div className="right_side_info_wrap">
                                <div className="info_details">{userData.username}</div>
                                <div className="info_details" >{userData.age}</div>
                                <div className="info_details" >{userData.state}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            :
             <div className="no_user_present">No Users</div>}
            <div className="view_title">List View</div>
            {userdetails.length ? <ul className="list_view"> {userdetails.map((userData , j) => (
                <li key={userData.phoneNumber+j}>
                    <img className="user_img" src={imagePath('./user-icon.png').default} /> 
                    <div className="user_details">{userData.username} - {userData.age} - {userData.state}</div>
                </li>
            ))}
                </ul>
            :
            <div className="no_user_present">No Users</div>}
        </div>     
       </>
    );
}

export default Users;