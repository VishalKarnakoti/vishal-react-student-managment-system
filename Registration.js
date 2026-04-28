
import React,{useState} from "react";
function Registration(){
    const[form,setForm]=useState({name:'',email:'',password:''});
    const handleChange=e=>{
        setForm({...form,[e.target.name]:e.target.value});
    }
    const handleSubmit=e=>{
        e.preventDefault();
        alert(`Name:${form.name}`);
    }
    return(
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="name" onChange={handleChange} />
                <input name="email" placeholder="email" onChange={handleChange} />
                <input name="password" type="password" placeholder="password" onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Registration;
