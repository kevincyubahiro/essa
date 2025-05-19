import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Login= () => {
    const[username,setUsername]=useState("");
    const navigate=useNavigate();
    const[password,setPassword]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!username || !password){
            alert('plz fill these field')
            return;
        }
        axios.post('http://localhost:2000/login',{username,password})
        .then(res=>{
           navigate('/nav');
        })
        .catch(error=>{
            alert('invailed credential')
        })
    }
  useEffect(() => window.onpopstate = () => history.go(1), []);
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className='container shadow w-50 p-2 card  ' style={{marginTop:'120px'}}>
        <h2 className='text-center text-primary m-4'>login</h2>
 <input type="text" name="" id="" value={username}  onChange={(e)=>setUsername(e.target.value)} className='form-control m-2' style={{width:'520px'}} placeholder='Username'/>
 <input type="password" name="" id="" value={password}  onChange={(e)=>setPassword(e.target.value)} className='form-control m-2 '  style={{width:'520px'}}placeholder='Password'/>
 <button  type='submit' className='btn btn-success m-3 rounded-pill'>login</button>
You Have No Acount? <Link to='/login' className=' text-center '> Create  New An Account</Link>

      </form>
    </div>
  )
}

export default Login
