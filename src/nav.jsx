import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
            <nav className=' navbar navbar-expand-lg bg-dark px-3'>
                <ul className='navbar-nav ms-auto'>
                    <Link className='text-decoration-none me-5'>Home</Link>
                    <Link className='text-decoration-none me-5'>Trade</Link>
                    <Link className='text-decoration-none me-5'>Trainees</Link>
                    <Link to='/selectmark' className='text-decoration-none me-5'>Marks</Link>
                    <Link className='text-decoration-none me-5'>Report</Link>
              
                    <Link  to ='/'className='text-decoration-none me-5 text-danger'>logout</Link>
                </ul>
            </nav> <br /> <br /> <br /> <br /> <br /> <br />
            <h3 className=' text-center text-success'>Welcome To Essa Nyarugunga Technicals Secondary School System!!!!!</h3> <br /> <br /> <br />
            <div className="text-center mt-4">
              <button className='btn btn-primary mt-4'>See More</button>
            </div>
    </div>
  )
}

export default Nav
