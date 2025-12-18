import React from 'react'

const Login = () => {
  return (
    <section className='login-section padding-tb'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-wrapper'>
              <h3>Login</h3>
              <form className='login-form'>
                <input type="email" name='email' placeholder='Email' className='reg-input'/>
                <input type="password" name='password' placeholder='Password' className='reg-input'/>
                <button type='submit' className='lab-btn'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
