import React from 'react'
import { FormControl, InputBase, InputLabel, Input, Button } from '@mui/material';
import { useState } from 'react';

function AuthPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ username: '', password: '' });
  }

  return (

    <div >
      <InputLabel htmlFor="username">User Name:</InputLabel>
      <Input id="username" value={formData.username} onChange={handleChange} aria-describedby="my-helper-text" />
      <InputLabel htmlFor="password">Password:</InputLabel>
      <Input id="password" value={formData.password} onChange={handleChange} aria-describedby="my-helper-text" />
      <Button className='m-0.5' variant="contained" color="primary" onClick={handleSubmit}>Login</Button>

    </div>
  )
}

export default AuthPage