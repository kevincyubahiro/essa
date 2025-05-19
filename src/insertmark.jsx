import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Insertmark = () => {
    const[trainee_Id,setTrainee_Id]=useState("");
    const[trade_id,setTrade_id]=useState("");
    const[modulename,setModulename]=useState("");
    const[formative_assessment,setFormative_assessment]=useState("");
    const[summative_assessment,setSummative_assessment]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!trainee_Id || !trade_id || !modulename || !formative_assessment || !summative_assessment){
            alert('plz fill these field')
            return;
        }
        axios.post('http://localhost:2000/insertmarks',{trainee_Id,trade_id,modulename,formative_assessment,summative_assessment})
        .then(res=>{
        
          alert(`INSERTED`)
        })
        .catch(error=>{
            alert('user not inserted')
        })
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className='container shadow w-50 p-2 card  ' style={{marginTop:'120px'}}>
        <h2 className='text-center text-primary m-4'>INSERTED MARKS</h2>
 <input type="number" name="" id="" value={trainee_Id}  onChange={(e)=>setTrainee_Id(e.target.value)} className='form-control m-2' style={{width:'520px'}} placeholder='Trainee_Id'/>
 <input type="number" name="" id="" value={trade_id}  onChange={(e)=>setTrade_id(e.target.value)} className='form-control m-2'  style={{width:'520px'}}placeholder='Trade_id'/>
 <input type="text" name="" id="" value={modulename}  onChange={(e)=>setModulename(e.target.value)} className='form-control m-2'  style={{width:'520px'}}placeholder='Modulename'/>
 <input type="text" name="" id="" value={formative_assessment}  onChange={(e)=>setFormative_assessment(e.target.value)} className='form-control m-2'  style={{width:'520px'}}placeholder='Formative_assessment'/>
 <input type="text" name="" id="" value={summative_assessment}  onChange={(e)=>setSummative_assessment(e.target.value)} className='form-control m-2'  style={{width:'520px'}}placeholder='Summative_assessment'/>
 
 <button  type='submit' className='btn btn-success m-3'>login</button>
      </form>
    </div>
  )
}

export default Insertmark
