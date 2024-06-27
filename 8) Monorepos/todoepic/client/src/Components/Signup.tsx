import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSetRecoilState} from "recoil";
import {authState} from "../store/authState.ts";
const Signup = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        const response = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        // Todo: Create a type for the response that you get back from the server
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token)
            navigate("/todos") ;
        } else {
            alert("Error while signing up");
        }
    };

    return (
        <div style={{textAlign:'center'}}>
            <div style={{border:"2px solid" , width:'350px' }}>
                <h2 >Signup</h2>

                <div style={{display:'flex' , flexDirection:'column'}}>

                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' style={{margin:'10px' ,}} />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'style={{margin:'10px'}} /> 
                
                Already signed up? 
                <div>
                    <Link to="/login">Login</Link>
                <button onClick={handleSignup}>Signup</button> 
                </div>
            </div>  
             </div>
        </div>
    );
};

export default Signup;