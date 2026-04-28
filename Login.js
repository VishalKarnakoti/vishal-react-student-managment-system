import React,{useState} from 'react';
function Login(){
    const[form,setForm]=useState({email:'',password:''});
    const handleChange=e=>setForm({...form,[e.target.name]:e.target.value});
    const handleSubmit=e=>{
        e.preventDefault();
        alert(`email:${form.email}`);
    }
    return(
        <div>
            <h1>login
            </h1>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder='email' onChange={handleChange}/>
                <input name="password" type="password" placeholder='password' onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;
