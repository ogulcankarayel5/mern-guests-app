import React,{useState,useContext,useEffect} from 'react'
import AuthContext from '../../context/auth/authContext/authContext';
import {Link} from 'react-router-dom'

function Login() {
  const {loginUser,userAuth,errors,clearError} = useContext(AuthContext);
    const [user,setUser] = useState({name:'',email:'',password:''});
    const {email,password}=user;
    useEffect(() => {
      if(userAuth){
        props.history.push('/')
      }
    },[userAuth,props.history])
    const handleChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
        clearError();
    }

    const submit = e => {
        e.preventDefault();
        loginUser({email,password});
        clearError();
    }
    return (
        <div className="login">
        <h1>Sign In</h1>
        <form onSubmit={submit}>
          <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
          
          <input type="submit" value="Sing Up" className="btn" />
        </form>
        <div className="question">
        {errors !==null && <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span onClick={() => clearError()}>X</span></button>}
          <p>Don't have an account? {" "} <Link to='/register'>Sign Up </Link></p>
        </div>
      </div >
    )
}

export default Login
