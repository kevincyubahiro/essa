import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Insert= () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!username || !password){
            alert('plz fill these field')
            return;
        }
        axios.post('http://localhost:2000/insert',{username,password})
        .then(res=>{
          navigate('/')
          alert(`Hello ${username} Create account successfully`)
        })
        .catch(error=>{
            alert('user not inserted')
        })
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className='container shadow w-50 p-2 card  ' style={{marginTop:'120px'}}>
        <h2 className='text-center text-primary m-4'>registration</h2>
 <input type="text" name="" id="" value={username}  onChange={(e)=>setUsername(e.target.value)} className='form-control m-2' style={{width:'520px'}} placeholder='Username'/>
 <input type="password" name="" id="" value={password}  onChange={(e)=>setPassword(e.target.value)} className='form-control m-2'  style={{width:'520px'}}placeholder='Password'/>
 <button  type='submit' className='btn btn-success m-3'>login</button>
      </form>
    </div>
  )
}

export default Insert
