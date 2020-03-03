import React,{useState,useContext,useEffect} from 'react'
import AuthContext from '../../context/auth/authContext/authContext';
import {Link} from 'react-router-dom'

function Register(props) {
    const {registerUser,userAuth,errors,setError,clearError} = useContext(AuthContext);
    const [user,setUser] = useState({name:'',email:'',password:'',password2:''});
    const {name,email,password,password2}=user;
    useEffect(() => {
      if(userAuth){
        props.history.push('/')
      }
    },[userAuth,props.history])
    const onChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
        clearError()
    }

    const submit = e => {
        e.preventDefault();
        if(password !==password2){
          setError({msg:"passwords don't match"});
        }
        else{
          registerUser({name,email,password})
          clearError()
        }
    }
    return (
        <div className="register">
        <h1>Sign Up</h1>
        <form onSubmit={submit}>
          <input type="text" name="name" placeholder="Name" value={name} onChange={onChange} />
          <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} />
          <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} />
          <input type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={onChange} required />
          <input type="submit" value="Sing Up" className="btn" />
        </form>
        <div className="question">
          {errors !==null && <button className="danger">
            {errors.msg ? errors.msg : errors.error[0].msg}
            <span onClick={() => clearError()}>X</span></button>}
          <p>Already have an accout? {" "} <Link to='/login'>Sign In </Link></p>
        </div>
      </div >
    )
}

export default Register
