import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
     const[username,setUsername]=useState("");
        const[password,setPassword]=useState("");
        const{id}=useParams();
        useEffect(()=>{
            axios.get(`http://localhost:2000/select/${id}`)
            .then(res=>{
                setUsername(res.data.username)
                setPassword(res.data.password)
            })
        },[id])
        const handleUpdate=(id)=>{
            axios.put(`http://localhost:2000/update/${id}`,{username,password})
            .then(res=>{
                alert('data updated successfully')
            })
            .catch(erro=>{
                alert('not data updated')
            })
        }
         
            const handleSubmit=(e)=>{
                e.preventDefault();
                if(!username || !password){
                    alert('plz fill these field')
                    return;
                }
                handleUpdate(id);
                }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='container shadow w-50 p-2 card  ' style={{marginTop:'120px'}}>
        <h2 className='text-center text-primary m-4'>Welcome To Update</h2>
 <input type="text" name="" id="" value={username}  onChange={(e)=>setUsername(e.target.value)} className='form-control m-2' style={{width:'520px'}} placeholder='Username'/>
 <input type="password" name="" id="" value={password}  onChange={(e)=>setPassword(e.target.value)} className='form-control m-2'  style={{width:'520px'}}placeholder='Password'/>
 <button  type='submit' className='btn btn-success m-3'>updated</button>
      </form>
    </div>
  )

}
export default Update
