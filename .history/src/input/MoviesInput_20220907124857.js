import React from 'react'

export const MoviesInput = (props) => {
  return (
    <div className='container-fluid bg-info p-3'>
    <div className='container'>
    <div className="row">
        <div className='col-lg-4'>
            <h2>Movies Search</h2>
        </div>
        <div className='col-lg-8 d-flex'>
            <input placeholder='search...' type="search" className='form-control w-25'/>
            <button className='btn btn-dark'>Search</button>
            <div className='mx-2'>Sort:</div>
            <select className='form-select w-25'>
                <option >Name</option>
                <option >Year</option>
            </select>
        </div>
    </div>

    </div>
    
    
    </div>
  )
}
