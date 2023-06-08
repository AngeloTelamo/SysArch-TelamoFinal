import React, {useState} from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className="auth-form-container2">
            <label><h1>LOGIN</h1></label>
            <form className="register-form2" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">LOGIN</button>
        </form>
        <button className="link-btn2" onClick={() => this.props.onFormClick('login')}>Dont have an Account? Sign up here.</button>
         </div>
  )
}

export default Login
