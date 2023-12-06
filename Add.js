import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Add() {
    const [inputData, setInputData] = useState({name:'',email:'',complaint:''})

    const navigat = useNavigate();
    function handleSubmit(event){
        event.preventDefault()

        axios.post('http://localhost:3030/users', inputData)
        .then(res => {
            alert("Data Added Successfully!");
            navigat('/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-light p-5'>
            <form onSubmit={handleSubmit}>
            <h1 className='heading'>Add Complaint</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control'
                    onChange = {e => setInputData({...inputData, name : e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control'
                    onChange = {e => setInputData({...inputData, email : e.target.value})}/>

                </div>
                <div>
                    <label htmlFor="complaint">Complaint:</label>
                    <textarea type="complaint" name='complaint' className='form-control'
                    onChange = {e => setInputData({...inputData, complaint : e.target.value})}/>

                </div>
                <br / >
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>

  )
}

export default Add