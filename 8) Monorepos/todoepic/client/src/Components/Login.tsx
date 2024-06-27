import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        // Todo: Create a type for the response that you get back from the server
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token)
            navigate('/todos');
        } else {
            alert("invalid credentials");
        }
    };

    return (
        <div style={{justifyContent: "center", display: "flex"}}>
            <div style={{border:'solid 2px', textAlign:'center' , width:'400px'}}>
                <h2>Login</h2>
                <div style={{margin:'10px'}}>
               
                <div><input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' /></div> 
                <div> <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /></div> 
                </div>
                New here? 
                <div>

              
                <Link to="/signup">Signup</Link>
                <button onClick={handleLogin}>Login</button>
               </div> 
             </div>
        </div>
    );
};

export default Login;