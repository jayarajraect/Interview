import React , { useState , useEffect} from 'react';
import { indianStates } from '../asserts/state';
function Home(props) {
    const[userdetails , setuserdetails] = useState([]);
    const[colletectdata , setcolletectdata] = useState({});
    const[errordata , seterrordata] = useState({});
    const formHandler = (e) => {
        setcolletectdata({...colletectdata , [e.target.name] : e.target.value})
        seterrordata({...errordata , [e.target.name] : ''})
    }
    useEffect(() => {
        var today = new Date();
        var birthDate = new Date(colletectdata.date_of_birth);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
            
        }
        setcolletectdata({...colletectdata , 'age' : age})
    }, [colletectdata.date_of_birth]);
    useEffect(() => {
        let old_sign_updata = JSON.parse(localStorage.getItem("storedUserDetails"))
        if(old_sign_updata){
            setuserdetails(old_sign_updata)
        }
    },[])
    useEffect(() => {
        localStorage.setItem("storedUserDetails" , JSON.stringify(userdetails));
        setcolletectdata({});
        seterrordata({});
    }, [userdetails]);
                
    const  submitdata = (event) => {
        event.preventDefault();
        let errorcount = 0;
        if(!colletectdata.username){
            seterrordata({...errordata , 'username' : "Enter your Username"})
            errorcount += 1;
        }
        else if(!colletectdata.email){
            seterrordata({...errordata , 'email' : "Enter your email"})
            errorcount += 1;
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(colletectdata.email)){
            seterrordata({...errordata , 'email' : "Enter valid email"}) 
            errorcount += 1;
        }
        else if(!colletectdata.phoneNumber){
            seterrordata({...errordata , 'phoneNumber' : "Enter your Phone Number"}) 
            errorcount += 1;
        }
        else if(!/^\d{10}$/.test(colletectdata.phoneNumber)){
            seterrordata({...errordata , 'phoneNumber' : "Enter a valid phone number (10 digits)"}) 
            errorcount += 1; 
        }
        else if(!colletectdata.date_of_birth){
            seterrordata({...errordata , 'date_of_birth' : "Enter your DOB"}) 
            errorcount += 1;
        }
        else if(!colletectdata.state){
            seterrordata({...errordata , 'state' : "Select your State"}) 
            errorcount += 1; 
        }
        else if(errorcount === 0){
            setuserdetails([...userdetails , colletectdata]);
        }
    }
    return (
       <>
        <div className="page_title">Add User</div>
        <div className="main_content">
            <form className="form_whole_wrap" onSubmit={submitdata}>
                <div className={"form_wrap " + (errordata&&errordata.username ? "error_msg" :"")}>
                    <label className="form_label">Username</label>
                    <input type="text" className="form_control" name="username" value={colletectdata.username || ''} onChange={(e) => formHandler(e)} placeholder="Enter your Username"/>
                    {errordata&&errordata.username ? <span className="error">{errordata.username}</span> : null}
                </div>
                <div className={"form_wrap " + (errordata&&errordata.email ? "error_msg" :"")}>
                    <label className="form_label">Email</label>
                    <input type="email" name="email" className="form_control" value={colletectdata.email || ''} onChange={(e) => formHandler(e)} placeholder="Enter your Email"/>
                    {errordata&&errordata.email ? <span className="error">{errordata.email}</span> : null}
                </div>
                <div className={"form_wrap " + (errordata&&errordata.phoneNumber ? "error_msg" :"")}>
                    <label className="form_label">Phone</label>
                    <input type="number" name="phoneNumber" className="form_control" value={colletectdata.phoneNumber || ''} onChange={(e) => formHandler(e)} placeholder="Enter your Phone Number"/>
                    {errordata&&errordata.phoneNumber ? <span className="error">{errordata.phoneNumber}</span> : null}
                </div>
                <div className={"form_wrap " + (errordata&&errordata.date_of_birth ? "error_msg" :"")}>
                    <label className="form_label">DOB</label>
                    <input type="date" name="date_of_birth" className="form_control"  value={colletectdata.date_of_birth || ''} onChange={(e) => formHandler(e)} placeholder="Enter your DOB"/>
                    {errordata&&errordata.date_of_birth ? <span className="error">{errordata.date_of_birth}</span> : null}
                </div>
                <div className={"form_wrap " + (errordata&&errordata.state ? "error_msg" :"")}>
                    <label className="form_label">State</label>
                    <select name="state" className="form_control" value={colletectdata.state || ''}  onChange={(e) => formHandler(e)}>
                        <option value="">Select your State</option>
                        {
                            indianStates.map(staesdata => (
                                <option value={staesdata.name} key={staesdata.abbreviation}>{staesdata.name}</option>
                            ))
                        }
                    </select>
                    {errordata&&errordata.state ? <span className="error">{errordata.state}</span> : null}
                </div>
                <div className="form_wrap">
                    <label className="form_label">&nbsp;</label>
                    <button className="submit_btn">Create User</button>
                </div>
            </form>
        </div>     
       </>
    );
}

export default Home;