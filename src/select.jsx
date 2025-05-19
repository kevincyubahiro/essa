import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Select = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:2000/select')
    .then(res=>setData(res.data))
    .catch(error=>{
      alert('not selected')
    })
  },[])
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:2000/delete/${id}`)
    .then(res=>{
      alert('deleted successfully')
    })
    .catch(error=>{
      alert('not deleted')
    })
  }
  return (
    <div>
      <Link to='/' className=' btn btn-primary m-2 p-2'>Add new User</Link>
      <table border={2} className=' table table-striped table-bordered container w-50'>
<thead>
  <tr>
    <th className='bg-dark text-white'>id</th>
    <th className='bg-dark text-white'>username</th>
    <th className='bg-dark text-white'>password</th>
    <th colSpan={2} className='bg-dark text-white'>operation</th>
  </tr>
</thead>
<tbody>
  {
    data.map((student)=>
     <tr key={student.id}>
<td>{student.id}</td>
<td>{student.username}</td>
<td>{student.password}</td>
<td>
<Link to={`/update/${student.id}`} className='btn btn-success m-2'>Update</Link>
  <button className=' btn btn-danger' onClick={(e)=>handleDelete(student.id)}>Delete</button>
</td>
     </tr>
  )
  }
</tbody>
      </table>
    </div>
  )
}

export default Select
