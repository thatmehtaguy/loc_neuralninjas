import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState("")
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, phoneNumber, password)
  }

  return (
    <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image"></img>
        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image" /> */}
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
    <form className="login" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <label>Email address:</label>
      <input 
        type = "email" 
        onChange = {(e) => setEmail(e.target.value)} 
        value = {email} 
        placeholder = "xyz@example.com"
      />
      <label>Phone Number:</label>
      <input 
        type="text" 
        onChange={(e) => setPhoneNumber(e.target.value)} 
        value={phoneNumber} 
        placeholder = "Phone Number"
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        placeholder = "Password"
      />

      <button className="btn btn-md btn-dark" disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div></div></div>
  )
}

export default Signup