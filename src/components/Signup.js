import React, { useState } from 'react'
import '../css/Signup.css'
import { Link } from 'react-router-dom'
import { formSchema2 } from '../components/common';

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e, values) => {
        const vals = { ...values };
        fetch("http:localhost:4000/adduser/register", {
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
        });

        e.target.reset();
        e.preventDefault();
        if( firstName.length===0 || lastName.length===0 || email.length===0 || password.length < 8 ) {
            setError(true)
        }
        if(firstName&&lastName&&email&&password) {
        console.log(
        "Firstname :", firstName,
        "\nLastname :", lastName,
        "\nEmail :", email,
        "\nPassword :", password,)
        }
    }

  return (
    <div className="body">
      <div className='login-form'>
          <h2>Sign up Page</h2>
          <form 
          validationschema={formSchema2}
          onSubmit={handleSubmit} >
              <div className='div-input'>
                  <input type="text" 
                  placeholder='First Name'
                  onChange={e=>setFirstName(e.target.value)} />
              </div>
              {error&&firstName.length<=0?
              <label >Veuillez remplire ce champ</label>: ""}

              <div className='div-input'>
                  <input type="text" 
                  placeholder='Last Name'
                  onChange={e=>setLastName(e.target.value)} />
              </div>
              {error&&lastName.length<=0?
              <label >Veuillez remplire ce champ</label>: ""}

              <div className='div-input'>
                  <input type="email" 
                  placeholder='Email'
                  onChange={e=>setEmail(e.target.value)} />
              </div>
              {error&&email.length<=0?
              <label >Veuillez remplire ce champ</label>: ""}

              <div className='div-input'>
                  <input type="password" 
                  placeholder='Password'
                  onChange={e=>setPassword(e.target.value)} />
              </div>
              {error&&password.length < 8?
              <label >Veuillez remplire ce champ</label>: ""}
    
              <div>
                  <button>INSCRIPTION</button>
              </div>
          </form>
          <div className="transit">
              <Link to="/login">Login now !</Link>
          </div>
      </div>
    </div>
  )
}

export default Signup;