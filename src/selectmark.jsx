import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Selectmark = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:2000/selectmarks')
    .then(res=>setData(res.data))
    .catch(error=>{
      alert('not selected')
    })
  },[])
  const handleDelete=(markid )=>{
    axios.delete(`http://localhost:2000/deletemarks/${markid}`)
    .then(res=>{
      alert('deleted successfully')
    })
    .catch(error=>{
      alert('not deleted')
    })
  }
  return (
    <div>
      <Link to='/insertmark' className=' btn btn-primary m-2 p-2'>Add new User</Link>
      <table border={2} className=' table table-striped table-bordered container w-50'>
<thead>
  <tr>
    <th className='bg-dark text-white'>trainee_Id</th>
    <th className='bg-dark text-white'>trade_id</th>
    <th className='bg-dark text-white'>modulename</th>
    <th className='bg-dark text-white'>	formative_assessment</th>
    <th className='bg-dark text-white'>summative_assessment</th>
    <th className='bg-dark text-white'>markid </th>
    <th colSpan={2} className='bg-dark text-white'>operation</th>
  </tr>
</thead>
<tbody>
  {
    data.map((student)=>
     <tr key={student.trainee_Id}>
<td>{student.trainee_Id}</td>
<td>{student.trade_id}</td>
<td>{student.modulename}</td>
<td>{student.formative_assessment}</td>
<td>{student.summative_assessment}</td>
<td>{student.markid}</td>
<td>
<Link to={`/updatemark/${student.markid}`}>Update</Link>
  <button className=' btn btn-danger' onClick={(e)=>handleDelete(student.trainee_Id)}>Delete</button>
</td>
     </tr>
  )
  }
</tbody>
      </table>
    </div>
  )
}

export default Selectmark
