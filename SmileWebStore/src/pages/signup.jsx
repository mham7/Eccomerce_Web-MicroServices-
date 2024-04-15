import React from 'react'

const Signup = () => {
  return (
    <div className='form-container'>
    <div className='logotitle'>
      SMILE
    </div>
     <input
          className="textfield"
          placeholder="First Name"
        />
     <input
          className="textfield"
          placeholder="Last Name"
        />
    
    <input
          className="textfield"
          placeholder="Email"
        />
    <input
          className="textfield"
          placeholder="Password"
    />
     <input
          className="textfield"
          placeholder="Confirm Password"
    />
    <button className='button'>Signup</button>
    <div className='note'>
    Already a member? <a href='/login' style={{ textDecoration: 'underline', }}>Login</a>
</div>
    </div>
  )
}

export default Signup