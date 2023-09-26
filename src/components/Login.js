import React, { useState } from 'react'
import '../css/Login.css'
import { formSchema } from '../components/common';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e, values) => {
        const vals = { ...values };
        fetch("http:localhost:4000/adduser/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(vals),
        }).catch(err => {
            return;
        }).then(res => {
            if(!res || !res.ok || res.status >= 400){
                return;
            }
            return res.json();
        })
        .then(data => {
            if (!data) return;
            console.log(data);
        })

        e.target.reset();
        e.preventDefault();
        if(email.length===0 || password.length < 8) {
            setError(true)
        }
        if(email&&password) {
        console.log("Email :", email,"\nPassword :", password)
        }
    }

  return (
    <div className="body-login">
        <div className='login-form'>
            <h2>Login Page</h2>
            <form 
            validationschema={formSchema}
            onSubmit={handleSubmit} 
            id='clear-form' >
                <div >
                    <input type="email" 
                    placeholder='Email'
                    onChange={e=>setEmail(e.target.value)} />
                </div>
                {error&&email.length<=0?
                <label >Veuillez remplire ce champ</label>: ""}
                <div>
                    <input type="password" 
                    placeholder='Password'
                    onChange={e=>setPassword(e.target.value)} />
                </div>
                {error&&password.length < 8?
                <label >Veuillez remplire ce champ</label>: ""}
                <div>
                    <button>Se connecter</button>
                </div>
            </form>
            <div className="transit">
                <a href="/signup" >Sign up now !</a>
            </div>
        </div>
    </div>
  )
}

export default Login