import React, {useState} from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import { useSignup } from "../hooks/useSignup"
import axios from "axios";

const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: 'user',
}

function VerificationPage () {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })
  const [fName, setFName] = useState('')
  const [mName, setMName] = useState('')
  const [lName, setLName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [address, setAddress] = useState('')
  const {signup, error, isLoading} = useSignup()
  const [inputImage, setInputImage] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(fName, mName, lName, address)
  }
  
    
  const handlePredict = () => {
    axios.post("", inputImage)
    .catch(error => (console.log(error)))
  }
  
  return (
    <div className = "verification-page">
        <form className="login" onSubmit={handleSubmit}>
          <h3>Enter Your Details:</h3>
          <div className = "verif-name-inputs">
            <input 
              type = "text" 
              onChange = {(e) => setFName(e.target.value)} 
              value = {fName} 
              placeholder = "First Name"
              className = "name-inputs"
            />
            <input 
              type = "text" 
              onChange = {(e) => setMName(e.target.value)} 
              value = {mName} 
              placeholder = "Middle Name"
              className = "name-inputs"
            />
            <input 
              type="text" 
              onChange={(e) => setLName(e.target.value)} 
              value={lName} 
              placeholder = "Last Name"
              className = "name-inputs"
            />
          </div>
          <label>Gender:</label>
          <div className = "gender-buttons">
            <div className = "gender-item form-check">
              <input 
                type = "radio" 
                name = "flexRadioDefault" 
                id = "flexRadioDefault1" 
                className = "form-check-input"/>
              <label 
                for = "male" 
                className = "gender-label" 
                value = "male">Male</label>              
            </div>
            <div className = "gender-item form-check">
              <input 
                type = "radio" 
                name = "flexRadioDefault" 
                id = "flexRadioDefault2" 
                className = "form-check-input" />
              <label 
                for = "female" 
                className = "gender-label" 
                value = "female">Female</label>              
            </div>
            <div className = "gender-item form-check">
              <input 
                type = "radio" 
                name = "flexRadioDefault" 
                id = "flexRadioDefault3" 
                className = "form-check-input" />
              <label 
                for = "other" 
                className = "gender-label" 
                value = "other">Others</label>              
            </div>
          </div>
          <input 
            type="text" 
            onChange={(e) => setDateOfBirth(e.target.value)} 
            value = {dateOfBirth} 
            placeholder = "DD-MM-YYYY"
          />
          <input 
            type="text" 
            onChange={(e) => setAddress(e.target.value)} 
            value = {address} 
            placeholder = "Address"
          />
          <button className="btn btn-md btn-dark" disabled={isLoading}>Submit</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
  )
}

export default VerificationPage;